import { _$p_TYP } from '../../../shared/types';
export declare const useBank: () => {
    bankAccounts: import('vue').Ref<any, any>;
    selectedBank: any;
    showForm: import('vue').Ref<boolean, boolean>;
    formMode: import('vue').Ref<string, string>;
    form: any;
    createBank: (_$p: _$p_TYP) => Promise<void>;
    updateBank: (_$p: _$p_TYP, account_id: string) => Promise<void>;
    viewBank: (account_id: string) => Promise<any>;
};
