import { _p_TYP, _pp_TYP } from '../../shared/types';
type __VLS_Props = {
    brandId?: string;
    visible: boolean;
    _pp: _pp_TYP;
    _p: _p_TYP;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:visible": (value: boolean) => any;
    saved: (data: any) => any;
    close: () => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:visible"?: ((value: boolean) => any) | undefined;
    onSaved?: ((data: any) => any) | undefined;
    onClose?: (() => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    logoInput: HTMLInputElement;
}, any>;
export default _default;
