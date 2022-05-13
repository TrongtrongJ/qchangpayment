import { ref, computed, reactive, watch } from 'vue';

type CardType = 'VISA' | 'MASTERCARD' | string;

type CardPaymentOption = {
	cardType: CardType;
	cardCode: string;
	cardBankName: string;
};

const mockCards = [
	{
		cardType: 'VISA',
		cardCode: '1121121121121121',
		cardBankName: 'Krungthai'
	}
];

export const cardPaymentOptions = ref<CardPaymentOption[]>([]);

export const cardPaymentOptionQuantity = computed(() => cardPaymentOptions.value.length);
