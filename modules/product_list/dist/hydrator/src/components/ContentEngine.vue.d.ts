type __VLS_Props = {
    ce_file: any;
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {
    ce_call: <K extends "msg">(event: K, ...args: Parameters<{
        msg: (payload: {
            type: string;
            _p?: any;
            _$p?: any;
            custom?: object;
            where?: {
                key: string;
                value: string;
            };
            $d?: any;
            el?: any;
        }) => Promise<void>;
    }[K]>) => Promise<void>;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
