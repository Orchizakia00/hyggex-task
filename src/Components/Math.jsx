import bulb from '../assets/bulb.png'
import sound from '../assets/sound.png'
import reload from '../assets/reload.png'
import left from '../assets/left.png'
import right from '../assets/right.png'
import fullScreen from '../assets/full-screen.png'

const Math = () => {

    const gradientStyle = {
        background: 'linear-gradient(to bottom left, #051A91, #1F80EB)',
    };

    return (
        <div className="w-[70%] mx-auto mb-24">
            <div role="tablist" className="tabs mb-8 w-[40%] mx-auto">
                <a role="tab" className="tab tab-active text-blue-900 font-bold mr-2 border-b-2">Study</a>
                <a role="tab" className="tab mr-2">Quiz</a>
                <a role="tab" className="tab mr-2">Test</a>
                <a role="tab" className="tab mr-2 border-b-neutral">Game</a>
                <a role="tab" className="tab">Others</a>
            </div>
            <div className="w-[70%] h-[400px] mx-auto rounded-3xl mb-8" style={gradientStyle}>
                <div>
                    <div className='flex justify-between px-8 pt-8'>
                        <img src={bulb} alt="" />
                        <img src={sound} alt="" />
                    </div>
                    <p className="text-4xl text-center font-bold mt-28 text-white">9 + 6 + 7x - 2x - 3</p>
                </div>
            </div>
            <div className='flex justify-around items-center w-[70%] mx-auto'>
                <img src={reload} alt="" />
                <img src={left} alt="" />
                <p className='text-xl font-bold'>01/10</p>
                <img src={right} alt="" />
                <img src={fullScreen} alt="" />
            </div>
        </div>
    );
};

export default Math;