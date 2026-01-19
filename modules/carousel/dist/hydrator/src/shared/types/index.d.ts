export type _p_TYP = {
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
    };
};
export type _$p_TYP = {
    data: {
        curr: {
            "id": string;
            type: string;
            data: {
                data: any;
                theme?: 'light' | 'dark';
                foo?: {
                    txt?: string;
                };
            };
        };
    };
};
export type _$cb_TYP = {
    change: (v: {
        $p: _$p_TYP;
    }) => any;
    add: (v: {
        $d: _$p_TYP['data']['curr']['data'];
        el: HTMLElement;
    }) => any;
};
