export declare function useApi(): {
    post: (url: any, body: any, token?: any) => Promise<any>;
    loading: import('vue').Ref<boolean, boolean>;
    error: import('vue').Ref<null, null>;
};
