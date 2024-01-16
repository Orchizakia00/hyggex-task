
const Title = () => {

    const textStyle = {
        background: 'linear-gradient(180deg, #06286E 0%, #164EC0 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    };

    return (
        <div className="mb-12">
            <p className="font-bold text-3xl" style={textStyle}>Relations and Functions ( Mathematics )</p>
        </div>
    );
};

export default Title;