import { _$p_TYP } from '../../../shared/types';
export declare const useAddress: (_v: {
    _$p: _$p_TYP;
}) => {
    addresses: import('vue').Ref<any, any>;
    getAddress: () => Promise<void>;
    createAddress: (_$p: _$p_TYP) => Promise<void>;
    updateAddress: (_$p: _$p_TYP, address_id: string) => Promise<void>;
    removeAddress: (address_id: any) => Promise<void>;
    viewAddress: (address_id: string) => Promise<any>;
    selectedAddress: any;
    showForm: import('vue').Ref<boolean, boolean>;
    formMode: import('vue').Ref<string, string>;
    form: any;
};
