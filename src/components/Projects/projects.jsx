import React from "react";
import "./projects.css"

const Projects = () => {

    return(
        <>
        <div className="section1">
            <h1>My-Projects</h1>
        </div>
        <hr />
        <div className="projectdetails">
            <div className="project1">
                <h1>Project 1 - Shopping Cart</h1>
                <p>Description :</p>
                <p>This is a project created using React in this projectthere is a Cart of fruits where you can add items to be purchased and their total will be calculated and displayed in the Bill section below with the item names respectively.</p>
                <br />
                <p>The Source Code of Shoping Card is Provided Below :</p>
                <p id="link">Link : <a href="https://github.com/VanshGilhotra/ShoppingCart" target="_blank">Shopping Cart Code</a></p>
            </div>
            <div className="project2">
                <h1>Project 2 -Weather App</h1>
                <p>Description :</p>
                <p>This Project is a Webpage which provides the Current Weather situation at a given Location.It was built using Weather API to get weather Updates.It was created using HTML ,CSS ,JS.</p>
                <br />
                <br />
                <p>The Source Code for Weather App is Provided Below :</p>
                <p id="link">Link : <a href="https://github.com/VanshGilhotra/Weather-App" target="_blank">Weather App</a></p>
            </div>
        </div>
        <div className="projectdetails">
            <div className="project3">
                <h1>Project 3 - Calculator</h1>
                <p>Description :</p>
                <p>This Project is a Calculator built with all the functionalities working.It was built using HTML ,without CSS ,JS.It was made by using proper logic created by self and addded in script file fto add functionalities in it.</p>
                <br /><br />
                <p>The Source Code of Calculator is provide Below :</p>
                <p id="link">Link : <a href="https://github.com/VanshGilhotra/Simple-Calculator" target="_blank">Calculator</a></p>
            </div>
            <div className="project4">
                <h1>Project 4 - Expense Calculator</h1>
                <p>Description :</p>
                <p>This project is for the Expenses Calculation in which the data is Added on the date when we spend any amount for daily Expense.In this project we can calculate all expenses on month end for personal detailed purpose.It was built using React(HTML,JS).</p>
                <p>The Source code of Expense tracker is given Below :</p>
                <p id="link">Link : <a href="https://github.com/VanshGilhotra/ExpenseApp" target="_blank">Expense Tracker</a></p>
            </div>
        </div>
            <p id="github">For More Project Details You can Visit my Github : <a href="https://github.com/VanshGilhotra?tab=repositories" target="_blank">Vansh Gilhotra</a></p>
        </>
    );
};

export default Projects;