import { _$p_TYP, _p_TYP } from '../../../shared/types';
type __VLS_Props = {
    suggestions: any[];
    onFocus?: () => void;
    _p: _p_TYP;
    _$p: _$p_TYP;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:query": (payload: {
        query: string;
        suggestions: any[];
    }) => any;
    select: (item: any) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:query"?: ((payload: {
        query: string;
        suggestions: any[];
    }) => any) | undefined;
    onSelect?: ((item: any) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    searchContainer: HTMLDivElement;
}, HTMLDivElement>;
export default _default;
