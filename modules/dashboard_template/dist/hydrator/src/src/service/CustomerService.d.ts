export namespace CustomerService {
    function getData(): {
        id: number;
        name: string;
        country: {
            name: string;
            code: string;
        };
        company: string;
        date: string;
        status: string;
        verified: boolean;
        activity: number;
        representative: {
            name: string;
            image: string;
        };
        balance: number;
    }[];
    function getCustomersSmall(): Promise<{
        id: number;
        name: string;
        country: {
            name: string;
            code: string;
        };
        company: string;
        date: string;
        status: string;
        verified: boolean;
        activity: number;
        representative: {
            name: string;
            image: string;
        };
        balance: number;
    }[]>;
    function getCustomersMedium(): Promise<{
        id: number;
        name: string;
        country: {
            name: string;
            code: string;
        };
        company: string;
        date: string;
        status: string;
        verified: boolean;
        activity: number;
        representative: {
            name: string;
            image: string;
        };
        balance: number;
    }[]>;
    function getCustomersLarge(): Promise<{
        id: number;
        name: string;
        country: {
            name: string;
            code: string;
        };
        company: string;
        date: string;
        status: string;
        verified: boolean;
        activity: number;
        representative: {
            name: string;
            image: string;
        };
        balance: number;
    }[]>;
    function getCustomersXLarge(): Promise<{
        id: number;
        name: string;
        country: {
            name: string;
            code: string;
        };
        company: string;
        date: string;
        status: string;
        verified: boolean;
        activity: number;
        representative: {
            name: string;
            image: string;
        };
        balance: number;
    }[]>;
    function getCustomers(params: any): Promise<any>;
}
