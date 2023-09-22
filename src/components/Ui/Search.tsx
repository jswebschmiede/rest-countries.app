import { type ChangeEvent } from 'react';
import { IoSearchSharp } from 'react-icons/io5';
import { filterHtml } from '../../lib/utils';

interface SearchProps {
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Search: React.FC<SearchProps> = ({ searchQuery, setSearchQuery }) => {
    const handleSearchChange = async (event: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(filterHtml(event.target.value));
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
