export declare const useOrder: () => {
    getAllOrder: () => Promise<void>;
    order: import('vue').Ref<never[], never[]>;
    getPaymentStatus: (order_id: any) => Promise<void>;
    payment_status: import('vue').Ref<null, null>;
    page_state: import('vue').Ref<string, string>;
    returnRequest: (order_id: any, order_item_id: any, return_reason: string, return_desc: string) => Promise<void>;
    getDeliveredOrder: () => Promise<void>;
    deliveredOrder: import('vue').Ref<never[], never[]>;
    createReviewAndRating: (order_item_id: number, rating: number, review_text: string) => Promise<void>;
    updateReviewAndRating: (review_id: any, rating: number, review_text: string) => Promise<void>;
};
