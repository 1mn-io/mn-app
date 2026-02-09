export declare const useBank: () => {
    bankAccounts: import('vue').Ref<any, any>;
    getBanks: () => Promise<void>;
    createBank: () => Promise<void>;
    updateBank: (account_id: string) => Promise<void>;
    removeBank: (account_id: any) => Promise<void>;
    selectedBank: import('vue').Ref<null, null>;
    showForm: import('vue').Ref<boolean, boolean>;
    formMode: import('vue').Ref<string, string>;
    form: any;
};
