import { SyntheticEvent, useState } from 'react';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

const Header: React.FC = () => {
    const [isDarkMode, setDarkMode] = useState(false);

    const handelDarkModeToggle = (event: SyntheticEvent) => {
        event.preventDefault();
        setDarkMode(!isDarkMode);
    };

    return (
        <header className='shadow-sm shadow-slate-200 bg-white'>
            <div className='container mx-auto py-6'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-lg sm:text-2xl font-extrabold'>Where in the world?</h1>
                    <button
                        className='inline-flex items-center font-semibold gap-2'
                        onClick={handelDarkModeToggle}
                    >
                        {isDarkMode ? (
                            <IoSunnyOutline className='w-5 h-5' />
                        ) : (
                            <IoMoonOutline className='w-5 h-5' />
                        )}
                        Dark Mode
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
