export namespace ProductService {
    function getProductsData(): {
        id: string;
        code: string;
        name: string;
        description: string;
        image: string;
        price: number;
        category: string;
        quantity: number;
        inventoryStatus: string;
        rating: number;
    }[];
    function getProductsWithOrdersData(): {
        id: string;
        code: string;
        name: string;
        description: string;
        image: string;
        price: number;
        category: string;
        quantity: number;
        inventoryStatus: string;
        rating: number;
        orders: {
            id: string;
            productCode: string;
            date: string;
            amount: number;
            quantity: number;
            customer: string;
            status: string;
        }[];
    }[];
    function getProductsMini(): Promise<{
        id: string;
        code: string;
        name: string;
        description: string;
        image: string;
        price: number;
        category: string;
        quantity: number;
        inventoryStatus: string;
        rating: number;
    }[]>;
    function getProductsSmall(): Promise<{
        id: string;
        code: string;
        name: string;
        description: string;
        image: string;
        price: number;
        category: string;
        quantity: number;
        inventoryStatus: string;
        rating: number;
    }[]>;
    function getProducts(): Promise<{
        id: string;
        code: string;
        name: string;
        description: string;
        image: string;
        price: number;
        category: string;
        quantity: number;
        inventoryStatus: string;
        rating: number;
    }[]>;
    function getProductsWithOrdersSmall(): Promise<{
        id: string;
        code: string;
        name: string;
        description: string;
        image: string;
        price: number;
        category: string;
        quantity: number;
        inventoryStatus: string;
        rating: number;
        orders: {
            id: string;
            productCode: string;
            date: string;
            amount: number;
            quantity: number;
            customer: string;
            status: string;
        }[];
    }[]>;
    function getProductsWithOrders(): Promise<{
        id: string;
        code: string;
        name: string;
        description: string;
        image: string;
        price: number;
        category: string;
        quantity: number;
        inventoryStatus: string;
        rating: number;
        orders: {
            id: string;
            productCode: string;
            date: string;
            amount: number;
            quantity: number;
            customer: string;
            status: string;
        }[];
    }[]>;
}
