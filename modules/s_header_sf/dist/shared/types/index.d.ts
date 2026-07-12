type _$ = {
    /**eg=> `change`, `add`  etc. */
    type: string;
    /**pass existing `_p` variable. */
    _p: any;
    /**pass existing `_$p` variable. */
    _$p: any;
    /**can be used to pass custom data. */
    custom?: any;
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
            "id": "";
            "type": "text";
            "data": {
                "data": string;
                "logo": {
                    "src": any;
                    "class": string;
                    "style": string;
                };
                "event": any;
                "itemA": {
                    "label": string;
                };
                "top_menu": {
                    "mode": "static" | "api";
                    "l": Array<{
                        name: string;
                        href: string;
                    }>;
                    "api": {
                        "url": string;
                        "method": string;
                        "headers": Record<string, string>;
                        "body": any;
                        "response_path": string;
                        "response_mapping": Record<string, string>;
                        "limit"?: number;
                    };
                };
                "side_menu"?: {
                    "mode": "static" | "api";
                    "l": Array<{
                        name: string;
                        href: string;
                    }>;
                    "api": {
                        "url": string;
                        "method": string;
                        "headers": Record<string, string>;
                        "body": any;
                        "response_path": string;
                        "response_mapping": Record<string, string>;
                        "limit"?: number;
                    };
                };
                "theme"?: string;
                "headerNature"?: string;
                "headerSize"?: string;
                "designMode"?: boolean;
            };
        };
    };
};
export type { _p_TYP, _$p_TYP };
type _pp_TYP = _$p_TYP;
export type { _pp_TYP };
