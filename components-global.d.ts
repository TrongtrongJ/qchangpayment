import "@vue/runtime-core";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    JSBarcodeWrapper: typeof import("./src/components/partials/JSBarcodeWrapper.vue")["default"];
    AddNewCardModal: typeof import("./src/components/modal/AddNewCardModal.vue")["default"];
  }
}

export {};
