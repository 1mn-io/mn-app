type _$ = {
    /**eg=> `change`, `add`  etc. */
    type: string;
    /**pass existing `_p` variable. */
    _p: any;
    /**pass existing `_$p` variable. */
    _$p: any;
    /**can be used to pass custom data. */
    custom?: object;
    /**can be used to pass eg=> `_$p[`data`].curr[`data`],`, `_$p[`data`].curr` */
    $d?: any;
    /**can be used to pass eg=> `HTMLElement` */
    el?: any;
};
type Events = "msg";
type _p_TYP = {
    /**@my module can use it to set custom variables. */
    my: any;
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
            type: string;
            data: {
                config: any;
                data?: any;
                table?: {
                    columns: Array<{
                        title: string;
                        field: string;
                        width?: number | string;
                        formatter?: string;
                        formatterParams?: any;
                    }>;
                    rows: Array<any>;
                };
                theme?: 'light' | 'dark';
                foo?: {
                    txt?: string;
                };
            };
        };
    };
};
type _$cb_TYP = {
    change: (v: {
        $p: _$p_TYP;
    }) => any;
    add: (v: {
        $d: _$p_TYP['data']['curr']['data'];
        el: HTMLElement;
    }) => any;
};
export type { _p_TYP, _$p_TYP, _$cb_TYP };
