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
};
