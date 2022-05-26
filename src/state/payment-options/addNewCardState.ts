import { ref, computed, reactive, watch, ComputedRef } from 'vue';
import { CardFormItem, CardSettings, initialCardFormData, initialCardSettings } from '@data/cardFormData';
import {
	formatCreditDebitCardCode,
	isValidCardCode,
	isValidCardExpirationDate,
	isValidCVV,
	isValidFnameLname,
	deriveKeysValidity,
	syncKeyValues,
	capitalizePhrase,
	bootstrapDigit,
	resetAllKeysTo,
	replaceAllNumericWithChar
} from '@src/utils';

export const isModalActive = ref<boolean>(true);
export function toggleModal() {
	isModalActive.value = !isModalActive.value;
}

export const cardFormData = reactive<CardFormItem>({
	...initialCardFormData
});

export const cardSettings = reactive<CardSettings>({
	...initialCardSettings
});

export function formatCardCode() {
	cardFormData.cardCode = formatCreditDebitCardCode(cardFormData.cardCode);
}

export const cardDisplayFormat = reactive<Record<string, 'text' | 'password'>>({
	cardCode: 'password',
	CVV: 'password'
});

export const cardCodeDisplayData = computed(() => {
	return {
		type: cardDisplayFormat.cardCode,
		str: cardFormData.cardCode
	};
});

export const cardFormWasTouched = reactive({
	cardHolderName: false,
	cardCode: false,
	expiration: false,
	CVV: false
});

export const cardFormErrors = reactive({
	cardHolderName: computed(() => cardFormWasTouched.cardHolderName && !cardFormValidities.cardHolderName),
	cardCode: computed(() => cardFormWasTouched.cardCode && !cardFormValidities.cardCode),
	expiration: computed(() => cardFormWasTouched.expiration && !cardFormValidities.expiration),
	CVV: computed(() => cardFormWasTouched.CVV && !cardFormValidities.CVV)
});

export function resetCardFormData() {
	syncKeyValues(cardFormData, initialCardFormData);
	syncKeyValues(cardSettings, initialCardSettings);
	resetAllKeysTo(cardFormWasTouched, false);
}

watch(isModalActive, (isActive) => {
	isActive && resetCardFormData();
});

export function capitalizeCardHolderName() {
	cardFormData.cardHolderName = capitalizePhrase(cardFormData.cardHolderName);
}

export const cardFormValidities = reactive({
	cardHolderName: computed(() => isValidFnameLname(cardFormData.cardHolderName)),
	cardCode: computed(() => isValidCardCode(cardFormData.cardCode)),
	expiration: computed(() => isValidCardExpirationDate(cardFormData.expiration)),
	CVV: computed(() => isValidCVV(cardFormData.CVV)),
	cardType: computed(() => !!isValidCardCode(cardFormData.cardType))
});

export function formatExpiration() {
	if (cardFormValidities.expiration) {
		const rawNumericInput = cardFormData.expiration.split('/').join();
		let month, year;
		switch (rawNumericInput.length) {
			case 3: {
				month = rawNumericInput.slice(0);
				year = rawNumericInput.slice(1, 3);
			}
			case 4: {
				month = rawNumericInput.slice(0, 2);
				year = rawNumericInput.slice(2, 4);
			}
		}
		if (month && year) {
			cardFormData.expiration = `${bootstrapDigit(parseInt(month))}/${year}`;
		}
	}
}

export const isFormValid = computed(() => deriveKeysValidity(cardFormValidities));
