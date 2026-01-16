export function useLayout(): {
    layoutConfig: {
        preset: string;
        primary: string;
        surface: null;
        darkTheme: boolean;
        menuMode: string;
    };
    layoutState: {
        staticMenuDesktopInactive: boolean;
        overlayMenuActive: boolean;
        profileSidebarVisible: boolean;
        configSidebarVisible: boolean;
        staticMenuMobileActive: boolean;
        menuHoverActive: boolean;
        activeMenuItem: null;
    };
    toggleMenu: () => void;
    isSidebarActive: import('vue').ComputedRef<boolean>;
    isDarkTheme: import('vue').ComputedRef<boolean>;
    getPrimary: import('vue').ComputedRef<string>;
    getSurface: import('vue').ComputedRef<null>;
    setActiveMenuItem: (item: any) => void;
    toggleDarkMode: () => void;
};
