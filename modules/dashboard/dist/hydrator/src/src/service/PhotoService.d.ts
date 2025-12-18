export namespace PhotoService {
    function getData(): {
        itemImageSrc: string;
        thumbnailImageSrc: string;
        alt: string;
        title: string;
    }[];
    function getImages(): Promise<{
        itemImageSrc: string;
        thumbnailImageSrc: string;
        alt: string;
        title: string;
    }[]>;
}
