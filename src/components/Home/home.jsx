import React, { useEffect, useState } from "react";
import './home.css';

const Home = () => {

    const [intro , setintro] = useState("I'm a Web Developer");
    const Changingtext = ["I'm Web Developer" , "Leaning MERN Stack Development" , "Let's Do Some Creative"];

    const [index,setindex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setindex((prevIndex) => (prevIndex+1) % Changingtext.length);
        },2000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        setintro(Changingtext[index]);
    }, [index]);

    return(
        <>
        <div className="intro">
        <h1>I'm Vansh Gilhotra</h1>
        <p>{intro}</p>
        </div>
        </>
    );
};

export default Home;