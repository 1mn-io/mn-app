export declare const useUIManager: () => {
    url: string;
    token: string;
    loading: import('vue').Ref<boolean, boolean>;
    error: import('vue').Ref<null, null>;
    createUI: (_v: any) => Promise<void>;
    listUI: () => Promise<void>;
    getUI: (id: any) => Promise<any>;
    updateUI: (_v: any) => Promise<void>;
    deleteUI: (id: any) => Promise<void>;
};
