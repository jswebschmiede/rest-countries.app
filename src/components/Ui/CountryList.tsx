import useDebounce from '../../hooks/useDepounce';
import { Country } from '../../types/Country';
import { Error } from '../../types/Error';
import { Region } from '../../types/Region';
import Card from './Card';
import { useEffect, useState } from 'react';

interface CountryListProps {
    searchQuery: string;
    selectedRegion: Region;
}

const CountryList: React.FC<CountryListProps> = ({ searchQuery, selectedRegion }) => {
    const [countrys, setCountrys] = useState<Country[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error>({ type: 'error', message: '' });

    // debounce searchQuery and selectedRegion
    const debouncedSearchQuery = useDebounce(searchQuery, 500);
    const debouncedFilter = useDebounce(selectedRegion, 500);

    // fetch data from API and set state accordingly (loading, error, countrys)
    const fetchCountrys = async (url: string) => {
        setLoading(true);

        // reset state
        setError({ message: '', type: 'error' });
        setCountrys([]);

        try {
            const res = await fetch(url);
            const data = await res.json();

            setCountrys(data);

            res.status === 404 &&
                setError({ message: 'No country found. Please try again.', type: 'warning' });
            setLoading(false);
        } catch (error) {
            setError({ message: 'Error fetching data. Please try again later.' });
            setLoading(false);
        }
    };

    // fetch data on initial render
    useEffect(() => {
        if (debouncedSearchQuery !== '') {
            fetchCountrys(
                `https://restcountries.com/v3.1/name/${debouncedSearchQuery.toLowerCase()}`,
            );
        } else if (debouncedFilter.name !== '') {
            fetchCountrys(
                `https://restcountries.com/v3.1/region/${debouncedFilter.name.toLowerCase()}`,
            );
        } else {
            fetchCountrys('https://restcountries.com/v3.1/all');
        }
    }, [debouncedSearchQuery, debouncedFilter]);

    return (
        <>
            {loading && <p>Loading...</p>}
            {error.message && (
                <p
                    className={`px-6 py-4 font-bold rounded-md ${
                        error.type === 'error'
                            ? 'bg-red-200 text-red-700'
                            : ' bg-yellow-200 text-yellow-700'
                    }`}
                >
                    {error.message}
                </p>
            )}

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16'>
                {countrys.length > 0 && (
                    <>
                        {countrys.map((country, index) => (
                            <Card
                                key={index}
                                name={country.name}
                                population={country.population}
                                region={country.region}
                                capital={country.capital}
                                flags={country.flags}
                            />
                        ))}
                    </>
                )}
            </div>
        </>
    );
};

export default CountryList;
