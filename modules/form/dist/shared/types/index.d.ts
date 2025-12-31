type _p_TYP = {
    f: {
        name: (v: string) => string;
        get_lib: (v: {
            name: string;
            run_from: any;
        }) => any;
        set_theme: (v: {
            name: string;
            el_id: string;
        }) => any;
        path: (v: string) => string;
    };
};
type _$p_TYP = {
    data: {
        curr: {
            "id": "";
            "type": "text";
            "data": any;
        };
    };
};
type _$cb_TYP = {
    change: (_v: {
        _$p: _$p_TYP;
    }) => any;
    add: (_v: {
        $d: _$p_TYP[`data`][`curr`][`data`];
        el: HTMLElement;
    }) => any;
};
export type FormFieldType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'date' | 'select' | 'checkbox' | 'textarea' | 'radio' | 'file';
export interface FormField {
    type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'date' | 'textarea' | 'select' | 'multi-select' | 'search-select' | 'checkbox' | 'radio' | 'file';
    name: string;
    label: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    grid?: number;
    defaultValue?: any;
    validation?: {
        min?: number;
        max?: number;
        minLength?: number;
        maxLength?: number;
        pattern?: string;
        allowedTypes?: string[];
        maxSize?: number;
    };
    options?: Array<{
        value: any;
        label: string;
    }>;
    uploadConfig?: {
        cloudName?: string;
        uploadPreset?: string;
        multiple?: boolean;
    };
    data?: {
        api: string;
        method?: 'GET' | 'POST';
        params?: Record<string, any>;
        headers?: Record<string, string>;
        valueField?: string;
        labelField?: string;
        transform?: (data: any[]) => Array<{
            value: any;
            label: string;
        }>;
        lazyLoad?: boolean;
        searchable?: boolean;
        searchParam?: string;
        debounce?: number;
    };
    description?: string;
    children?: FormField[];
}
export interface FieldGroup {
    description?: string;
    children: FormField[];
}
export interface FormLayout {
    title: string;
    subtitle?: string;
    submitButton?: {
        text: string;
        loadingText?: string;
    };
    layout?: 'single' | 'two-column' | 'grid';
    theme?: 'light' | 'dark';
    spacing?: 'compact' | 'normal' | 'comfortable';
}
export interface FormData {
    api?: {
        submit: string;
        [key: string]: string;
    };
    fields?: FormField[] | FieldGroup[];
    layout?: FormLayout;
    actions?: {
        primary: string;
        secondary?: string;
        cancel?: string;
    };
    validation?: {
        clientSide?: boolean;
        schema?: any;
    };
    cloudinary?: {
        cloudName: string;
        uploadPreset: string;
    };
}
export type { _p_TYP, _$p_TYP, _$cb_TYP };
