import '@fontsource/nunito-sans/300.css';
import '@fontsource/nunito-sans/600.css';
import '@fontsource/nunito-sans/800.css';
import Header from './components/Ui/Header';
import Search from './components/Ui/Search';
import Filter from './components/Ui/Filter';
import Card from './components/Ui/Card';
import { useFetchCountrys } from './lib/useFetchCountrys';

const App: React.FC = () => {
    const { countrys, loading, error } = useFetchCountrys('https://restcountries.com/v3.1/all');

    return (
        <main className='font-sans font-light text-fonts bg-background min-h-screen w-full dark:text-fonts-dm dark:bg-background-dm'>
            <Header />
            <section className='container mx-auto py-12'>
                <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between pb-12 gap-8'>
                    <Search />
                    <Filter />
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16'>
                    {loading && <p>Loading...</p>}

                    {!error ? (
                        countrys.map((country, index) => (
                            <Card
                                key={index}
                                name={country.name}
                                population={country.population}
                                region={country.region}
                                capital={country.capital}
                                flags={country.flags}
                            />
                        ))
                    ) : (
                        <p className='px-6 py-4 bg-red-200 text-red-700 font-bold rounded-md'>
                            {error}
                        </p>
                    )}
                </div>
            </section>
        </main>
    );
};

export default App;
