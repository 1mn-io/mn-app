export declare const useOrder: () => {
    getAllOrder: () => Promise<void>;
    order: import('vue').Ref<never[], never[]>;
    getPaymentStatus: (order_id: any) => Promise<void>;
    payment_status: import('vue').Ref<null, null>;
    page_state: import('vue').Ref<string, string>;
};
