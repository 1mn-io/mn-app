import { StorefrontTemplate } from '../types';
export declare const useTemplates: (addToast: (msg: string, typ: "success" | "error" | "info") => void) => {
    templates: import('vue').Ref<{
        id: string;
        name: string;
        label: string;
        description: string;
        fields: {
            key: string;
            type: string;
            label: string;
            required?: boolean | undefined;
        }[];
        template?: any;
        template_editor?: any;
    }[], StorefrontTemplate[] | {
        id: string;
        name: string;
        label: string;
        description: string;
        fields: {
            key: string;
            type: string;
            label: string;
            required?: boolean | undefined;
        }[];
        template?: any;
        template_editor?: any;
    }[]>;
    loading: import('vue').Ref<boolean, boolean>;
    hasMore: import('vue').Ref<boolean, boolean>;
    error: import('vue').Ref<string | null, string | null>;
    fetchTemplates: (clearExisting?: boolean) => Promise<void>;
    loadMoreTemplates: () => Promise<void>;
    createTemplate: (payload: {
        name: string;
        label: string;
        description: string;
        fields: any[];
    }) => Promise<boolean>;
    updateTemplate: (id: string, payload: {
        name: string;
        label: string;
        description: string;
        fields: any[];
    }) => Promise<boolean>;
    deleteTemplate: (id: string) => Promise<void>;
    fetchSingleTemplate: (query: {
        id?: string;
        user_id?: string;
        typ?: string;
        dta_filter?: any;
    }) => Promise<StorefrontTemplate | null>;
};
