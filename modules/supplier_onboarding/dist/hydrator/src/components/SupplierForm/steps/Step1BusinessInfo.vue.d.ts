declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    formData: {
        type: ObjectConstructor;
        required: true;
    };
    discrepancy: {
        type: ObjectConstructor;
        default: () => {};
    };
    isLocked: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    preview: (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    formData: {
        type: ObjectConstructor;
        required: true;
    };
    discrepancy: {
        type: ObjectConstructor;
        default: () => {};
    };
    isLocked: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onPreview?: ((...args: any[]) => any) | undefined;
}>, {
    discrepancy: Record<string, any>;
    isLocked: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
export default _default;
