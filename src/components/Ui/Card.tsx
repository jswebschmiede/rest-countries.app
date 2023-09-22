import { Country } from '../../types/Country';

const Card: React.FC<Country> = ({ name, capital, flags, population, region }) => {
    return (
        <div className='shadow-sm shadow-slate-200 bg-white rounded-md'>
            <figure>
                <img
                    src={flags.svg}
                    alt={flags.alt}
                    className='w-full h-48 object-cover rounded-t-md'
                    loading='lazy'
                />
            </figure>

            <div className='p-6 text-sm'>
                <h2 className='text-lg font-bold pb-4'>{name.common}</h2>
                <p>
                    <span className='font-semibold'>Population:</span> {population}
                </p>
                <p>
                    <span className='font-semibold'>Region:</span> {region}
                </p>
                <p>
                    <span className='font-semibold'> Capital: </span>
                    {capital}
                </p>
            </div>
        </div>
    );
};

export default Card;
