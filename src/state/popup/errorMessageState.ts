import { ref, reactive, watch } from "vue";
import { resetAllKeysTo } from "@src/utils";

export const isErrorMassagePopupActive = ref(false);
const errorMessageTimeout = ref<ReturnType<typeof setTimeout>>();

export const popupErrorMessage = reactive({
  title: "",
  subtitle: "",
});

function clearErrorMessage() {
  errorMessageTimeout.value && clearTimeout(errorMessageTimeout.value);
  resetAllKeysTo(popupErrorMessage, "");
}

type ErrorMessagePayload = {
  title: string;
  subtitle?: string;
  timeout?: number;
};
export function dispatchErrorMessage({
  title,
  subtitle = "",
  timeout = 3500,
}: ErrorMessagePayload): void {
  clearErrorMessage();

  Object.assign(popupErrorMessage, { title, subtitle });

  errorMessageTimeout.value = setTimeout(() => {
    resetAllKeysTo(popupErrorMessage, "");
  }, timeout);
}

watch(
  () => popupErrorMessage.title,
  (newTitle) => {
    isErrorMassagePopupActive.value = !!newTitle;
  }
);
