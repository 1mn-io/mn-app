export interface SearchSuggestion {
    text: string;
    type: 'product' | 'category' | 'brand' | 'popular';
    count?: number;
    category?: string;
    relevance?: number;
}
export interface SearchResult {
    id: string;
    title: string;
    description?: string;
    image?: string;
    price?: number;
    originalPrice?: number;
    discount?: number;
    rating?: number;
    reviewCount?: number;
    category?: string;
    brand?: string;
    inStock?: boolean;
    fastDelivery?: boolean;
}
export interface SearchResponse {
    success: boolean;
    suggestions: SearchSuggestion[];
    trending_searches?: string[];
    popular_categories?: Array<{
        name: string;
        count: number;
        image?: string;
    }>;
    recent_searches?: string[];
    products?: SearchResult[];
    meta?: {
        search_time_ms: number;
        total_results?: number;
        query: string;
    };
}
export interface SearchConfig {
    theme?: 'light' | 'dark';
    placeholder?: string;
    showTrending?: boolean;
    showCategories?: boolean;
    showRecentSearches?: boolean;
    maxSuggestions?: number;
    debounceTime?: number;
    searchIcon?: boolean;
    clearButton?: boolean;
    voiceSearch?: boolean;
    locationBased?: boolean;
    autoFocus?: boolean;
    mobileFullWidth?: boolean;
}
export interface SearchEvents {
    onSearch: (query: string) => void;
    onSuggestionSelect: (suggestion: SearchSuggestion) => void;
    onTrendingSelect: (trend: string) => void;
    onCategorySelect: (category: string) => void;
    onClear: () => void;
    onVoiceSearch: () => void;
    onLocationSearch: () => void;
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
            data: SearchResponse;
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
export declare const EXAMPLE_SEARCH_RESPONSE: {
    success: boolean;
    suggestions: {
        text: string;
        type: string;
        count: number;
    }[];
    trending_searches: string[];
    popular_categories: {
        name: string;
        count: number;
        image: string;
    }[];
    recent_searches: string[];
    meta: {
        search_time_ms: number;
        query: string;
    };
};
