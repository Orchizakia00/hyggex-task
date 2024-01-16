

const Math = () => {

    const gradientStyle = {
        background: 'linear-gradient(to bottom left, #051A91, #1F80EB)',
    };    

    return (
        <div className="w-[70%] mx-auto">
            <div role="tablist" className="tabs mb-8 w-[40%] mx-auto">
                <a role="tab" className="tab tab-active text-blue-900 font-bold mr-2 border-b-2">Study</a>
                <a role="tab" className="tab mr-2">Quiz</a>
                <a role="tab" className="tab mr-2">Test</a>
                <a role="tab" className="tab mr-2 border-b-neutral">Game</a>
                <a role="tab" className="tab">Others</a>
            </div>
            <div className="w-[70%] h-[400px] mx-auto rounded-2xl flex items-center justify-center" style={gradientStyle}>
                <p className="text-4xl font-bold text-center text-white">9 + 6 + 7x - 2x - 3</p>
            </div>
        </div>
    );
};

export default Math;