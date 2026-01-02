type _p_TYP = {
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
        listen?: (event: string, callback: (data: any) => void) => void;
        call?: (event: string, data: any) => Promise<any>;
        emitter?: any;
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
