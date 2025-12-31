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
    typ: 'category' | 'brand' | 'size' | 'color' | 'price' | 'rating' | 'material' | 'gender' | 'discount' | 'occasion' | 'fit' | 'sleeve_length' | 'neck_type' | 'pattern' | 'season';
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
    search_combination?: {
        q: string;
        query_by: string;
        query_by_weights: string;
        page: number;
        per_page: number;
        prioritize_exact_match: boolean;
        prefix: boolean;
        facet_by: string;
        max_facet_values: number;
    };
    meta?: {
        total_results: number;
        search_time_ms: number;
        query: string;
    };
}
export interface AppliedFilters {
    [key: string]: string[] | {
        min?: number;
        max?: number;
    }[];
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
    onFilterChange: (appliedFilters: AppliedFilters) => void;
    onSearch: (searchData: FilterData) => void;
    onClearAll: () => void;
    onApply: () => void;
    onReset: () => void;
}
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
            id: string;
            type: string;
            data: any;
        };
    };
};
export type _$cb_TYP = {
    change: (_v: {
        _$p: _$p_TYP;
    }) => any;
    add: (_v: {
        $d: _$p_TYP[`data`][`curr`][`data`];
        el: HTMLElement;
    }) => any;
};
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
