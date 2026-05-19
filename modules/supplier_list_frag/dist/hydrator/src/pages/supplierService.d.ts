export interface SupplierItem {
    id: string;
    user_id: string;
    data: any;
    status: string;
    discrepancy: any;
    created_at: string;
    updated_at: string;
}
export interface Pagination {
    current_page: number;
    per_page: number;
    total_count: number;
    total_pages: number;
    has_next: boolean;
    has_previous: boolean;
}
export interface SupplierListResponse {
    status: boolean;
    data: {
        items: SupplierItem[];
        pagination: Pagination;
    };
}
export declare const fetchSuppliers: (headers?: any) => Promise<SupplierListResponse>;
export declare const adminUpdateSupplier: (id: string, payload: {
    user_id: string;
    status: string;
    discrepancy: any;
}, headers?: any) => Promise<any>;
export declare const deleteSupplier: (id: string, headers?: any) => Promise<any>;
