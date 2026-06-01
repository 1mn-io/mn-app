type _$ = {
    /**eg=> `change`, `add`  etc. */
    type: string;
    /**pass existing `_p` variable. */
    _p: any;
    /**pass existing `_pp` variable. */
    _pp: any;
    /**can be used to pass custom data. */
    custom?: any;
    /**can be used to pass eg=> `_pp[`data`].curr[`data`],`, `_pp[`data`].curr` */
    $d?: any;
    /**can be used to pass eg=> `HTMLElement` */
    el?: any;
};
type Events = "msg";
type _p_TYP = {
    /**@my module can use it to set custom variables. */
    my: any;
    custom: any;
    f: {
        name: (v: string) => string;
        get_lib: (v: {
            name: string;
            run_from: any;
        }) => any;
        set_theme: (v: {
            name: string;
            el_id: string;
        }) => any;
        path: (v: string) => string;
        uuid: () => string;
        wait_until(conditionFn: () => boolean, interval?: number): Promise<void>;
        call: (event: Events, _$: _$) => any;
        listen: (event: Events, handler: (_$: _$) => any | Promise<any>) => any;
        new_emitter: () => ({
            emit: (event: Events, _$: _$) => any;
            on: (event: Events, handler: (_$: _$) => any | Promise<any>) => any;
        });
    };
};
type _$p_TYP = {
    data: {
        curr: {
            "id": string;
            "type": string;
            "custom": any;
            "data": {
                theme?: 'light' | 'dark';
                foo?: {
                    txt?: string;
                };
                "value": {
                    "l": any;
                };
                "api": any;
                "map": {
                    title: string;
                    desc: string;
                    image: string;
                    tag: string;
                    ctaText: string;
                    linkId: string;
                    onClick: string;
                };
            };
        };
    };
};
type _$cb_TYP = {
    change: (_v: {
        _$p: _$p_TYP;
    }) => any;
    add: (_v: {
        $d: _$p_TYP[`data`][`curr`][`data`];
        el: HTMLElement;
    }) => any;
};
export type { _p_TYP, _$p_TYP, _$cb_TYP };
