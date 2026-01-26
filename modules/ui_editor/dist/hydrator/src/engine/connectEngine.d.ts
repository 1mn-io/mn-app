export const engine: {
    availableModules: {
        id: string;
        label: string;
        type: string;
        ce_file: string;
    }[];
    canvasModules: never[];
    selectedId: null;
    dragOverIndex: null;
    fetchCache: {};
    addToCanvas: (module: any, targetIndex?: null) => Promise<void>;
    select: (uid: any) => void;
    update: (uid: any, changes: any) => void;
    remove: (uid: any) => void;
    moveModule: (fromUid: any, toIndex: any) => void;
    getDropIndex: (mouseY: any, canvasElement: any) => number;
    setDragOverIndex: (index: any) => void;
    clearDragOverIndex: () => void;
    clearCache: () => void;
    moveUp: (uid: any) => void;
    moveDown: (uid: any) => void;
    toggleMinimize: (uid: any) => void;
    formatBlock: (_v?: {
        ce_file: null;
        curr: null;
    }) => {
        uid: any;
        type: string;
        slug: string;
        ce_file: string;
        ce_config: {
            lazy_lib: {
                renderer_src: string;
                hydrator_src: string;
                editor_src: string;
            };
        };
        ce_data: null[];
        minimized: boolean;
        collapsed: boolean;
        state: {
            theme: string;
            env: string;
        };
        _created: number;
    };
};
