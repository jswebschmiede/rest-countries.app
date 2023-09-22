import { useEffect, useState } from 'react';

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

export const useFetchCountrys = (url: string) => {
    const [countrys, setCountrys] = useState<Country[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchCountrys = async () => {
        try {
            const response = await fetch(url);
            const countrys = await response.json();

            setCountrys(countrys);
            setLoading(false);
        } catch (error) {
            setError('Error fetching data. Please try again later.');
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCountrys();
    }, []);

    return { countrys, loading, error };
};
