import useDebounce from '../../hooks/useDepounce';
import { Country } from '../../types/Country';
import Card from './Card';
import { useEffect, useState } from 'react';

interface CountryListProps {
    searchQuery: string;
}

const CountryList: React.FC<CountryListProps> = ({ searchQuery }) => {
    const [countrys, setCountrys] = useState<Country[]>([]);
    const debouncedSearchQuery = useDebounce(searchQuery, 500);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    // fetch data from the API
    const fetchCountrys = async (url: string) => {
        setLoading(true);

        // reset state
        setError('');
        setCountrys([]);

        try {
            const res = await fetch(url);
            const data = await res.json();
            setCountrys(data);
            res.status === 404 && setError('No country found. Please try again.');
            setLoading(false);
        } catch (error) {
            setError('Error fetching data. Please try again later.');
            setLoading(false);
        }
    };

    // fetch data on initial render
    useEffect(() => {
        if (debouncedSearchQuery !== '') {
            fetchCountrys(`https://restcountries.com/v3.1/name/${debouncedSearchQuery}`);
        } else {
            fetchCountrys('https://restcountries.com/v3.1/all');
        }
    }, [debouncedSearchQuery]);

    return (
        <>
            {loading && <p>Loading...</p>}
            {error && (
                <p className='px-6 py-4 bg-red-200 text-red-700 font-bold rounded-md'>{error}</p>
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
