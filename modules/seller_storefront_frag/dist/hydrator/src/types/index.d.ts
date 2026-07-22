export interface StorefrontField {
    key: string;
    type: string;
    label: string;
    required?: boolean;
}
export interface StorefrontTemplate {
    id: string;
    name: string;
    label: string;
    description: string;
    fields: StorefrontField[];
    template?: any;
    template_editor?: any;
}
export interface StorefrontData {
    fields?: StorefrontField[];
    template_id?: string;
    template_typ?: string;
    template_name?: string;
    fields_values?: Record<string, string | number | boolean>;
    ce_file?: string;
}
export interface Storefront {
    id: string;
    typ: string;
    name: string;
    created_at: string;
    updated_at: string;
    children: any[];
    dta: StorefrontData;
}
export interface Toast {
    id: string;
    message: string;
    type: "success" | "error" | "info";
}
