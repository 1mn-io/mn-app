export namespace NodeService {
    function getTreeNodesData(): ({
        key: string;
        label: string;
        data: string;
        icon: string;
        children: {
            key: string;
            label: string;
            data: string;
            icon: string;
            children: {
                key: string;
                label: string;
                icon: string;
                data: string;
            }[];
        }[];
    } | {
        key: string;
        label: string;
        data: string;
        icon: string;
        children: {
            key: string;
            label: string;
            icon: string;
            data: string;
        }[];
    })[];
    function getTreeTableNodesData(): {
        key: string;
        data: {
            name: string;
            size: string;
            type: string;
        };
        children: ({
            key: string;
            data: {
                name: string;
                size: string;
                type: string;
            };
            children: {
                key: string;
                data: {
                    name: string;
                    size: string;
                    type: string;
                };
            }[];
        } | {
            key: string;
            data: {
                name: string;
                size: string;
                type: string;
            };
            children?: undefined;
        })[];
    }[];
    function getTreeTableNodes(): Promise<{
        key: string;
        data: {
            name: string;
            size: string;
            type: string;
        };
        children: ({
            key: string;
            data: {
                name: string;
                size: string;
                type: string;
            };
            children: {
                key: string;
                data: {
                    name: string;
                    size: string;
                    type: string;
                };
            }[];
        } | {
            key: string;
            data: {
                name: string;
                size: string;
                type: string;
            };
            children?: undefined;
        })[];
    }[]>;
    function getTreeNodes(): Promise<({
        key: string;
        label: string;
        data: string;
        icon: string;
        children: {
            key: string;
            label: string;
            data: string;
            icon: string;
            children: {
                key: string;
                label: string;
                icon: string;
                data: string;
            }[];
        }[];
    } | {
        key: string;
        label: string;
        data: string;
        icon: string;
        children: {
            key: string;
            label: string;
            icon: string;
            data: string;
        }[];
    })[]>;
}
