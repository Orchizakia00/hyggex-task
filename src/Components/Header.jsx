import home from '../assets/Frame.png';
import arrow from '../assets/arrow.png';

const Header = () => {
    return (
        <div className='my-16'>
            <div className="flex items-center">
                <a className="">
                    <img src={home} alt="" />
                </a>
                <img src={arrow} alt="" />
                <a className="">Flashcard
                </a>
                <img src={arrow} alt="" />
                <a className="">Mathematics
                </a>
                <img src={arrow} alt="" />
                <a className="text-blue-800 font-semibold">Relation and Function</a>
            </div>
        </div>
    );
};

export default Header;