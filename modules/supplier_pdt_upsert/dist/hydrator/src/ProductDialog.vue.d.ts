import { _pp_TYP } from '../../shared/types';
type __VLS_Props = {
    visible: boolean;
    productId?: string | null;
    _pp: _pp_TYP;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    close: () => any;
    saved: (productId: string) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onClose?: (() => any) | undefined;
    onSaved?: ((productId: string) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    fileInput: HTMLInputElement;
}, any>;
export default _default;
