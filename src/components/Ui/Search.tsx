import { ChangeEvent, useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import { filterHtml } from '../../lib/utils';
import { Country } from '../../lib/useFetchCountrys';

interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [countrys, setCountrys] = useState<Country[]>([]);

    console.log(countrys);

    const handleSearchChange = async (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(filterHtml(event.target.value));

        try {
            const response = await fetch(`https://restcountries.com/v3.1/name/${searchQuery}`);
            const countrys = await response.json();

            setCountrys(countrys);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form className='bg-white shadow-sm py-4 px-7 rounded-md w-full max-w-md flex gap-6 items-center'>
            <IoSearchSharp className='text-inputs dark:text-inputs-dm w-6 h-6' />
            <input
                type='text'
                placeholder='Search for a country...'
                className='w-full text-inputs text-sm dark:text-inputs-dm focus:outline-none'
                onChange={handleSearchChange}
                value={searchQuery}
            />
        </form>
    );
};

export default Search;
