export type TreeNode = {
    key: string;
    label: string;
    type: string;
    selectable: boolean;
    leaf?: boolean;
    selected?: boolean;
    children?: TreeNode[];
};
export type Pagination = {
    page: number;
    per_page: number;
    total_records: number;
    total_pages: number;
    has_next?: boolean;
    has_prev?: boolean;
};
export type Attribute = {
    Key: string;
    Value: string[];
};
export type RecordData = {
    Attributes: Attribute[];
    Department?: string;
    Main_Category?: string;
    Segment_Category?: string;
    Product_Category?: string;
};
export type DataRecord = {
    id: string;
    data: RecordData;
};
export type Filters = {
    Department?: string;
    Main_Category?: string;
    Segment_Category?: string;
    Product_Category?: string;
};
export type CrudResponse = {
    success: boolean;
    data: {
        message?: string;
        record: DataRecord;
    };
};
export declare const pdtSysDataApi: {
    /**
     * Hierarchical category tree: Department -> Main_Category ->
     * Segment_Category -> Product_Category, with optional search/pagination
     * and a set of pre-selected leaf keys.
     */
    listCategoryTree(opts?: {
        page?: number;
        perPage?: number;
        filters?: Filters;
        search?: string;
        selectedKeys?: string[];
    }): Promise<{
        success: boolean;
        data: TreeNode[];
        pagination: Pagination;
    }>;
    /** A single record (including its Attributes) by UUID. */
    getData(id: string): Promise<{
        success: boolean;
        data: {
            record: DataRecord;
        };
    }>;
    /** List records with free-text search and pagination. */
    listData(opts?: {
        page?: number;
        perPage?: number;
        filters?: Filters;
        search?: string;
    }): Promise<{
        success: boolean;
        data: {
            records: DataRecord[];
            pagination: Pagination;
        };
    }>;
    /** Hierarchical filtering; Department is required. */
    findData(opts: {
        Department: string;
        Main_Category?: string;
        Segment_Category?: string;
        Product_Category?: string;
    }): Promise<{
        success: boolean;
        data: DataRecord[];
    }>;
    /** Create a brand-new attribute record. Body is the RecordData itself. */
    createData(data: RecordData): Promise<CrudResponse>;
    /** Full replace of an existing record's fields/attributes. */
    updateData(record: {
        id: string;
        data: RecordData;
    }): Promise<CrudResponse>;
    /** Partial update — only send the fields that changed. */
    patchData(id: string, data: Partial<RecordData>): Promise<CrudResponse>;
    deleteData(id: string): Promise<{
        success: boolean;
        message?: string;
    }>;
};
export default pdtSysDataApi;
