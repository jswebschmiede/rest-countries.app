export type CountryName = {
    common: string;
    official: string;
};

export type CountryFlag = {
    svg: string;
    png: string;
    alt: string;
};

export interface Country {
    name: CountryName;
    capital: string;
    flags: CountryFlag;
    population: number;
    region: string;
}
