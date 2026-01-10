import { _$p_TYP, _p_TYP } from '../../../shared/types';
interface FormField {
    name: string;
    label?: string;
    type: string;
    placeholder?: string;
    validation?: string;
    columns?: number;
    options?: any;
    help?: string;
    section?: string;
}
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    fields: {
        type: () => FormField[];
        required: true;
    };
    __internal: {
        type: ObjectConstructor;
    };
}>, {
    fieldBindings: import('vue').ComputedRef<{
        value: import('vue').Ref<any, any>;
        attrs: import('vue').Ref<import('vee-validate').BaseFieldProps & import('vee-validate').GenericObject, import('vee-validate').BaseFieldProps & import('vee-validate').GenericObject>;
        name: string;
        label?: string;
        type: string;
        placeholder?: string;
        validation?: string;
        columns?: number;
        options?: any;
        help?: string;
        section?: string;
    }[]>;
    errors: import('vue').ComputedRef<Partial<Record<string, string | undefined>>>;
    onSubmit: (e?: Event) => Promise<void | undefined>;
    getGridClass: (field: FormField) => "col-span-12" | "col-span-12 md:col-span-6";
    autocompleteState: import('vue').Ref<Record<string, {
        isOpen: boolean;
        results: any[];
        loading: boolean;
    }>, Record<string, {
        isOpen: boolean;
        results: any[];
        loading: boolean;
    }>>;
    handleSearch: (field: FormField, query: string) => Promise<void>;
    selectOption: (fieldName: string, option: any) => void;
    normalizeOptions: (options: any) => any;
    _$p: _$p_TYP;
    _p: _p_TYP;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, "form-submit"[], "form-submit", import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    fields: {
        type: () => FormField[];
        required: true;
    };
    __internal: {
        type: ObjectConstructor;
    };
}>> & Readonly<{
    "onForm-submit"?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
