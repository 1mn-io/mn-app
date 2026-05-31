import { _pp_TYP } from '../../shared/types';
type __VLS_Props = {
    brandId?: string;
    visible: boolean;
    _pp: _pp_TYP;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:visible": (value: boolean) => any;
    saved: (data: any) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:visible"?: ((value: boolean) => any) | undefined;
    onSaved?: ((data: any) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    logoInput: HTMLInputElement;
}, any>;
export default _default;
