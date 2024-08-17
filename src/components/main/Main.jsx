import { useContext } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import "./main.css";

const Main = () => {
    const {
        onSent,
        recentPrompt,
        showResult,
        loading,
        resultData,
        setInput,
        input,
        newChat
    } = useContext(Context);

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            onSent();
        }
    }

    const handleSuggestionsOne = () => {
        setInput("Suggest beautiful places to see on an upcoming road trip");
        onSent();
    }
    const handleSuggestionsTow = () => {
        setInput("Briefly summarize this concept: urban planning");
        onSent();
    }
    const handleSuggestionsThree = () => {
        setInput("Brainstorm team bonding activities for our work retreat");
        onSent();
    }
    const handleSuggestionsFour = () => {
        setInput("Improve the readability of the following code");
        onSent();
    }

    return (
        <>
        
        <div className="main">
            <div className="nav">
                <p className="logo" onClick={newChat}>Gemini with <span> Ahmed Nady </span></p>
                <img src={assets.user_icon2} alt="" />
            </div>

            <div className="main-container">
                {showResult ? (
                    <div className="result">
                        <div className="result-title">
                        <img src={assets.user_icon2} alt="" />
                            <p>{recentPrompt}</p>
                        </div>

                        <div className="result-data">
                            {/* Gemini Loading Icon */}
                            <img src={assets.gemini_icon} alt="" />

                            {loading ? (
                                <div className="loader">
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                            ) : (
                                <p dangerouslySetInnerHTML={{ __html: resultData }} />
                            )}
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="greet">
                            <p>
                                <span>Hello, I'm Gemini <span style={{fontSize:"25px"}}>clone</span>, developed by Ahmed Nady.</span>
                            </p>
                            <p>How can I help you today?</p>
                        </div>

                        <div className="cards">
                            <div className="card" onClick={handleSuggestionsOne}>
                                <p>Suggest beautiful places to see on an upcoming road trip</p>
                                <img src={assets.compass_icon} alt="Compass icon" />
                            </div>

                            <div className="card" onClick={handleSuggestionsTow}>
                                <p>Briefly summarize this concept: urban planning</p>
                                <img src={assets.bulb_icon} alt="Bulb icon" />
                            </div>

                            <div className="card" onClick={handleSuggestionsThree}>
                                <p>Brainstorm team bonding activities for our work retreat</p>
                                <img src={assets.message_icon} alt="Message icon" />
                            </div>

                            <div className="card" onClick={handleSuggestionsFour}>
                                <p>Improve the readability of the following code</p>
                                <img src={assets.code_icon} alt="Code icon" />
                            </div>
                        </div>
                    </div>
                )}

                <div className="main-bottom">
                    <div className="search-box">
                    <input 
                    onChange={(e) => setInput(e.target.value)} 
                    value={input} 
                    onKeyPress={handleKeyPress} 
                    type="text" 
                    placeholder='Enter a prompt here'
                     />

                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />

                            {input && (
                                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
                            )}
                        </div>
                    </div>

                    <p className="bottom-info">
                        Gemini may display inaccurate info, including about people, so
                        double-check its responses. Your privacy and Gemini Apps
                    </p>
                </div>


            </div>
        </div>
       </>
    );
};

export default Main;
