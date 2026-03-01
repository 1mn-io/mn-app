export type _$ = {
    type: string;
    _p: any;
    _$p: any;
    custom?: any;
    $d?: any;
    el?: any;
};
export type Events = "msg";
export type _p_TYP = {
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
        wait_until: (conditionFn: () => boolean, interval?: number) => Promise<void>;
        call: (event: Events, _$: _$) => any;
        listen: (event: Events, handler: (_$: _$) => any | Promise<any>) => any;
        new_emitter: () => {
            emit: (event: Events, _$: _$) => any;
            on: (event: Events, handler: (_$: _$) => any | Promise<any>) => any;
        };
    };
};
export type _$p_TYP = {
    data: {
        curr: {
            id: string;
            type: string;
            data: {
                api?: any;
                cart_popup?: any;
                mode?: string;
                data?: string;
                [key: string]: any;
                event: any;
            };
        };
    };
};
export type _$cb_TYP = {
    change?: (event: any) => void;
    add?: (_v: {
        $d: any;
        el: HTMLElement;
    }) => any;
    [key: string]: any;
};
export interface ProductItem {
    document: any;
}
export interface ProductApiResponse {
    success: boolean;
    data: any;
}
export interface FilterItem {
    name: string;
    count: number;
    selected: boolean;
    min?: number;
    max?: number;
    value?: string;
}
export interface FilterGroup {
    title: string;
    typ: string;
    l: FilterItem[];
    collapsed?: boolean;
    visible?: boolean;
}
export interface FilterData {
    raw_text?: string;
    collection?: string;
    filters?: FilterGroup[];
    sattr_k?: string;
    sattr_v?: string;
    sattr_page?: number;
    sattr_per_page?: number;
    theme?: 'light' | 'dark';
    success?: boolean;
    search_combination?: any;
    meta?: any;
}
export interface AppliedFilters {
    [key: string]: any;
}
export interface FilterConfig {
    theme?: 'light' | 'dark';
    layout?: 'sidebar' | 'modal' | 'drawer';
    showCounts?: boolean;
    showClearAll?: boolean;
    showApplyButton?: boolean;
    showResetButton?: boolean;
    defaultExpanded?: boolean;
    mobileBreakpoint?: number;
    showPriceInput?: boolean;
    showColorSwatches?: boolean;
    showRatingStars?: boolean;
    maxVisibleItems?: number;
    searchInFilters?: boolean;
}
export interface FilterEvents {
    onFilterChange: (appliedFilters: any) => void;
    onSearch: (searchData: any) => void;
    onClearAll: () => void;
    onApply: () => void;
    onReset: () => void;
}
export declare const COLOR_MAP: Record<string, string>;
export declare const SIZE_MAP: Record<string, string[]>;
export declare const CLOTHING_FILTERS: {
    sleeve_length: string[];
    neck_type: string[];
    fit: string[];
    pattern: string[];
    material: string[];
    occasion: string[];
    season: string[];
};
