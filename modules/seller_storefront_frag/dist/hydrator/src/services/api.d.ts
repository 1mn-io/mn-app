export interface APIResponse<T> {
    success: boolean;
    data?: T;
}
export declare const fetchStorefrontsFromAPI: (page: number, pageSize: number) => Promise<APIResponse<any>>;
export declare const fetchTemplatesFromAPI: (page: number, pageSize: number) => Promise<APIResponse<any>>;
export declare const createStorefrontInAPI: (payload: {
    name: string;
    dta: any;
}) => Promise<APIResponse<any>>;
export declare const updateStorefrontInAPI: (payload: {
    id: string;
    name: string;
    dta: any;
}) => Promise<APIResponse<any>>;
export declare const fetchStorefrontDetailsFromAPI: (payload: {
    id?: string;
    name?: string;
}) => Promise<APIResponse<any>>;
export declare const deleteStorefrontInAPI: (id: string) => Promise<APIResponse<any>>;
export declare const createTemplateInAPI: (payload: {
    name: string;
    label: string;
    description: string;
    fields: any[];
}) => Promise<APIResponse<any>>;
export declare const updateTemplateInAPI: (payload: {
    id: string;
    name: string;
    label: string;
    description: string;
    fields: any[];
}) => Promise<APIResponse<any>>;
export declare const deleteTemplateInAPI: (id: string) => Promise<APIResponse<any>>;
export declare const getCustomDataInAPI: (query: {
    id?: string;
    user_id?: string;
    typ?: string;
    dta_filter?: any;
}) => Promise<APIResponse<any>>;
export declare const parseAPIError: (err: any) => string;
