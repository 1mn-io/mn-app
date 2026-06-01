export interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
    description: string;
}
export declare const generateProducts: (count: number, startId: number) => Product[];
