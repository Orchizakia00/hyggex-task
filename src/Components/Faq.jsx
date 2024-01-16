

const Faq = () => {

    const textStyle = {
        background: 'linear-gradient(180deg, #06286E 0%, #164EC0 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    };

    return (
        <div className="mb-80">
            <h2 className="font-bold text-5xl mb-12" style={textStyle}>FAQ</h2>
            <div className="w-[850px]">
                <div className="collapse collapse-arrow mb-8" style={{ border: '1px solid #217EEC' }}>
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-lg font-medium">
                        Can education flashcards be used for all age groups?
                    </div>
                    <div className="collapse-content">
                        <p>answer</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow mb-8" style={{ border: '1px solid #217EEC' }}>
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-lg font-medium">
                        How do education flashcards work?
                    </div>
                    <div className="collapse-content">
                        <p>answer</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow mb-8" style={{ border: '1px solid #217EEC' }}>
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-lg font-medium">
                        Can education flashcards be used for test preparation?
                    </div>
                    <div className="collapse-content">
                        <p>answer</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;