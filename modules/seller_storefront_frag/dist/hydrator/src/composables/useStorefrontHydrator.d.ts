export declare const useStorefrontHydrator: () => {
    activeTabFragments: import('vue').Ref<any[], any[]>;
    templateEditorConfig: import('vue').Ref<any, any>;
    templateConfig: import('vue').Ref<any, any>;
    activeHydrators: Map<string, any>;
    tabFragmentsData: import('vue').Ref<Record<string, any>, Record<string, any>>;
    loadingTemplate: import('vue').Ref<boolean, boolean>;
    clearLocalStorageDrafts: () => void;
    getContainerId: (ceFileId: string) => string;
    fetchTemplateEditorConfig: () => Promise<any>;
    fetchTemplateConfig: (storefrontName?: string, storefrontId?: string) => Promise<any>;
    findCeFileInTemplate: (obj: any, targetId: string) => any;
    loadActiveTabFragments: (activeTabId: string, storefrontName: string, storefrontId: string, context: {
        _p?: any;
        _pp?: any;
        onSaveTrigger?: () => void;
    }) => Promise<void>;
};
