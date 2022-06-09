import { useLocalStorage } from "@vueuse/core";

type Locale = "en" | "th";

export const preferredLocale = useLocalStorage<Locale>("locale", "th");
