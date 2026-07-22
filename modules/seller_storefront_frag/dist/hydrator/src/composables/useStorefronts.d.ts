import { Storefront, StorefrontTemplate } from '../types';
export declare const useStorefronts: (options: {
    _p: any;
    _pp: any;
    addToast: (msg: string, typ: "success" | "error" | "info") => void;
}) => {
    storefronts: import('vue').Ref<{
        id: string;
        typ: string;
        name: string;
        created_at: string;
        updated_at: string;
        children: any[];
        dta: {
            fields?: {
                key: string;
                type: string;
                label: string;
                required?: boolean | undefined;
            }[] | undefined;
            template_id?: string | undefined;
            template_typ?: string | undefined;
            template_name?: string | undefined;
            fields_values?: Record<string, string | number | boolean> | undefined;
            ce_file?: string | undefined;
        };
    }[], Storefront[] | {
        id: string;
        typ: string;
        name: string;
        created_at: string;
        updated_at: string;
        children: any[];
        dta: {
            fields?: {
                key: string;
                type: string;
                label: string;
                required?: boolean | undefined;
            }[] | undefined;
            template_id?: string | undefined;
            template_typ?: string | undefined;
            template_name?: string | undefined;
            fields_values?: Record<string, string | number | boolean> | undefined;
            ce_file?: string | undefined;
        };
    }[]>;
    loading: import('vue').Ref<boolean, boolean>;
    isFallback: import('vue').Ref<boolean, boolean>;
    error: import('vue').Ref<string | null, string | null>;
    searchQuery: import('vue').Ref<string, string>;
    totalCount: import('vue').Ref<number, number>;
    hasMore: import('vue').Ref<boolean, boolean>;
    filteredStorefronts: import('vue').ComputedRef<{
        id: string;
        typ: string;
        name: string;
        created_at: string;
        updated_at: string;
        children: any[];
        dta: {
            fields?: {
                key: string;
                type: string;
                label: string;
                required?: boolean | undefined;
            }[] | undefined;
            template_id?: string | undefined;
            template_typ?: string | undefined;
            template_name?: string | undefined;
            fields_values?: Record<string, string | number | boolean> | undefined;
            ce_file?: string | undefined;
        };
    }[]>;
    paginatedStorefronts: import('vue').ComputedRef<{
        id: string;
        typ: string;
        name: string;
        created_at: string;
        updated_at: string;
        children: any[];
        dta: {
            fields?: {
                key: string;
                type: string;
                label: string;
                required?: boolean | undefined;
            }[] | undefined;
            template_id?: string | undefined;
            template_typ?: string | undefined;
            template_name?: string | undefined;
            fields_values?: Record<string, string | number | boolean> | undefined;
            ce_file?: string | undefined;
        };
    }[]>;
    localFullList: import('vue').Ref<{
        id: string;
        typ: string;
        name: string;
        created_at: string;
        updated_at: string;
        children: any[];
        dta: {
            fields?: {
                key: string;
                type: string;
                label: string;
                required?: boolean | undefined;
            }[] | undefined;
            template_id?: string | undefined;
            template_typ?: string | undefined;
            template_name?: string | undefined;
            fields_values?: Record<string, string | number | boolean> | undefined;
            ce_file?: string | undefined;
        };
    }[], Storefront[] | {
        id: string;
        typ: string;
        name: string;
        created_at: string;
        updated_at: string;
        children: any[];
        dta: {
            fields?: {
                key: string;
                type: string;
                label: string;
                required?: boolean | undefined;
            }[] | undefined;
            template_id?: string | undefined;
            template_typ?: string | undefined;
            template_name?: string | undefined;
            fields_values?: Record<string, string | number | boolean> | undefined;
            ce_file?: string | undefined;
        };
    }[]>;
    fetchStorefronts: (clearExisting?: boolean) => Promise<void>;
    loadMore: () => void;
    updateStorefrontState: (id: string, payloadDta: any, entireTemplate?: any) => Promise<Storefront | null>;
    saveStorefrontMeta: (storefront: Storefront | null, payload: {
        name: string;
        template: StorefrontTemplate;
        ceFile: string;
        fieldsValues: Record<string, string>;
        entireTemplate?: any;
    }) => Promise<void>;
    deleteStorefront: (id: string) => Promise<boolean>;
};
