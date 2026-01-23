export declare const useAddress: () => {
    addresses: import('vue').Ref<any, any>;
    getAddress: () => Promise<void>;
    createAddress: () => Promise<void>;
    updateAddress: (address_id: string) => Promise<void>;
    removeAddress: (address_id: any) => Promise<void>;
    selectedAddress: import('vue').Ref<null, null>;
    showForm: import('vue').Ref<boolean, boolean>;
    formMode: import('vue').Ref<string, string>;
    form: any;
};
