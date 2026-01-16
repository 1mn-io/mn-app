interface CartItem {
    pricing: any;
}
export declare const useCart: () => {
    items: import('vue').Ref<{
        pricing: any;
    }[], CartItem[] | {
        pricing: any;
    }[]>;
    submit: () => Promise<void>;
    loading: import('vue').Ref<boolean, boolean>;
    error: import('vue').Ref<null, null>;
    totalPrice: import('vue').ComputedRef<number>;
    totalPayable: import('vue').ComputedRef<number>;
    discount: import('vue').ComputedRef<number>;
    currency: import('vue').ComputedRef<any>;
    toggleSelect: (is_selected: boolean, cart_item_id: any) => Promise<void>;
    toggleSelectAll: (e: any) => Promise<void>;
    selectedItems: import('vue').ComputedRef<{
        pricing: any;
    }[]>;
    isAllSelected: import('vue').ComputedRef<boolean>;
    proceedToCheckout: () => Promise<void>;
    payNow: (gateway: any) => Promise<void>;
    quantityUpdate: (cart_item_id: any, quantity: any) => Promise<void | null>;
    removeFromCart: (cart_item_id: any) => Promise<void>;
};
export {};
