import { useState } from 'react';
import '@fontsource/nunito-sans/300.css';
import '@fontsource/nunito-sans/600.css';
import '@fontsource/nunito-sans/800.css';
import Header from './components/Ui/Header';
import Search from './components/Ui/Search';
import Filter from './components/Ui/Filter';
import CountryList from './components/Ui/CountryList';

const App: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <main className='font-sans font-light text-fonts bg-background min-h-screen w-full dark:text-fonts-dm dark:bg-background-dm'>
            <Header />
            <section className='container mx-auto py-12'>
                <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between pb-12 gap-8'>
                    <Search
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                    />
                    <Filter />
                </div>

                <CountryList searchQuery={searchQuery} />
            </section>
        </main>
    );
};

export default App;
