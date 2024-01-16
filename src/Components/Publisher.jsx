// import icon from '../assets/icon.png'
import logo from '../assets/logo.png'
import plus from '../assets/plus.png'

const Publisher = () => {
    return (
        <div className='flex justify-between mb-40'>
            <div className='flex items-center'>
                {/* <img src={icon} className='bg-white' alt="" /> */}
                <img src={logo} alt="" />
            </div>
            <div className='flex items-center gap-2'>
                <img src={plus} alt="" />
                <p className='font-bold text-2xl text-blue-900'>Create Flashcard</p>
            </div>
        </div>
    );
};

export default Publisher;