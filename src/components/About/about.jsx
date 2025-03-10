import React from "react";
import "./about.css"

const About = () =>{
    return(
        <>
            <div className="maincontent">
                <div className="section1">
                    <h1>About Me</h1>
                </div>
            <hr />
            <div className="self-intro">
                <div className="Schooling">
                    <h1><u>My Education</u></h1>
                    <p>Hello! I'm Vansh Gilhotra,<br /> I have junior my Studies(10'th) from <br />
                    <u><b>Assumption Convent School,Abohar.</b></u> <br /><br />
                    I have completed my Senior Secondary School(+2)<br /> from 
                    <u><b> Govt. Senior Secondary School, Abohar.</b></u> <br /><br />
                    Now, I am Pursuing BCA from <u><b>Seth G.L <br />Bihani S.D (PG) College,Ganganagar.</b></u></p>
                </div>
                <div className="hobby">
                    <h1><u>My Hobbies</u></h1>
                    <p>I am likely to play football and listen <br />to music in my free time. <br /><br />
                    Like if i have free time then i also focus <br /> on my physique. I go to GYM regularly for fitness. <br /><br />
                    I Love making exciting new Features which <br />
                    practices me for new techniques of coding.</p>
                </div>
            </div>
            <div className="section2">
                <div className="skill">
                    <h1><u>My Skills</u></h1>
                    <p>I have Learned Html,Css and JavaScript concepts <br />
                    for creating websites. <br /><br />I have a great knowledge of many Programming <br />Languages like: C++,Java,Python,React,etc. <br /><br />
                    I have also created basic web pages using these <br />languages for example: Calculator,Weather App <br />using WEATHER API etc.</p>
                </div>
                <div className="services">
                    <h1>Services</h1>
                    <p>I can Help you in creating a beautiful and featured <br />website as per your requirements. <br /><br />I am good in Website designing and new features <br />to add in it for better UX. <br /><br />I am going to learn Database Management <br />for website soon and i update it soon as it is completed.</p>
                </div>
            </div>
            </div>
        </>
    );
};

export default About;