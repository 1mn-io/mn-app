export namespace CountryService {
    function getData(): {
        name: string;
        code: string;
    }[];
    function getCountries(): Promise<{
        name: string;
        code: string;
    }[]>;
}
