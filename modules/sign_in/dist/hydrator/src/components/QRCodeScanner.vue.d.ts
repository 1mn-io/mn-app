interface Props {
    visible: boolean;
    title?: string;
    description?: string;
    decodeApiUrl?: string;
    verifyApiUrl?: string;
    onSuccess?: (token: string) => void;
    onClose?: () => void;
    onError?: (error: Error) => void;
}
declare const _default: import('vue').DefineComponent<Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    close: () => any;
    success: (token: string) => any;
    error: (error: Error) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    onClose?: (() => any) | undefined;
    onSuccess?: ((token: string) => any) | undefined;
    onError?: ((error: Error) => any) | undefined;
}>, {
    visible: boolean;
    title: string;
    description: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    videoRef: HTMLVideoElement;
    fileInputRef: HTMLInputElement;
}, any>;
export default _default;
