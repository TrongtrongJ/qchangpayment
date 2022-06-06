import { computed, ref } from 'vue';
import { numericStringWithCommas } from '@src/utils';

export const currentTransactionValue = ref<number>(1200);

export const stringifiedTransactionValue = computed<string>(() => numericStringWithCommas(currentTransactionValue.value))