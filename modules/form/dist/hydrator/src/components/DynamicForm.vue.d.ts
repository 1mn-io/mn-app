interface FormField {
    name: string;
    label?: string;
    type: string;
    placeholder?: string;
    validation?: string;
    columns?: number;
    options?: any;
    minChars?: number;
    openOnClick?: boolean;
    help?: string;
}
type __VLS_Props = {
    fields: FormField[];
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "form-submit": (values: any) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onForm-submit"?: ((values: any) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
