import { Toast } from '../types';
export declare const useToasts: () => {
    toasts: import('vue').Ref<{
        id: string;
        message: string;
        type: "success" | "error" | "info";
    }[], Toast[] | {
        id: string;
        message: string;
        type: "success" | "error" | "info";
    }[]>;
    addToast: (message: string, type?: Toast["type"]) => void;
    removeToast: (id: string) => void;
};
