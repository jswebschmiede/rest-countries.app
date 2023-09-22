import { Listbox } from '@headlessui/react';
import { IoChevronDownSharp, IoCheckmarkOutline } from 'react-icons/io5';
import { Region } from '../../types/Region';
import { Fragment } from 'react';

interface FilterProps {
    selectedRegion: Region;
    setSelectedRegion: React.Dispatch<React.SetStateAction<Region>>;
}

const regions = [
    { id: 1, name: 'Africa' },
    { id: 2, name: 'Americas' },
    { id: 3, name: 'Asia' },
    { id: 4, name: 'Europe' },
    { id: 5, name: 'Oceania' },
];

const Filter: React.FC<FilterProps> = ({ selectedRegion, setSelectedRegion }) => {
    return (
        <Listbox
            value={selectedRegion}
            onChange={setSelectedRegion}
        >
            <div className='relative'>
                <Listbox.Button className='bg-white shadow-sm py-4 px-6 rounded-md w-full max-w-[400px] flex text-sm gap-8 items-center'>
                    Filter by Region <IoChevronDownSharp className='mr-auto w-4 h-4' />
                </Listbox.Button>
                <Listbox.Options className='absolute right-0 mt-1 max-h-60 w-full overflow-auto rounded-md text-base shadow-sm'>
                    {regions.map((region) => (
                        <Listbox.Option
                            key={region.id}
                            value={region}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={`${
                                        active ? 'bg-slate-200' : 'bg-white'
                                    } bg-white py-2 px-7 text-sm cursor-pointer flex items-center justify-between gap-2`}
                                >
                                    {region.name}
                                    {selected && <IoCheckmarkOutline />}
                                </li>
                            )}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </div>
        </Listbox>
    );
};

export default Filter;
