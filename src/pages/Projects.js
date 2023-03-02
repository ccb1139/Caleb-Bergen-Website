import React from 'react'
import { useState, useEffect, useRef } from "react";

import ProjectCard from '../components/Projects/ProjectCard'
import { Parallax } from 'react-parallax';

import bgGrad from "../img/backgrounds/bgGrad.png"

// Get It Done Imgs
import gid_AchImgs from '../img/get-it-done-img/Acheivements.png'
import gid_halloffame from '../img/get-it-done-img/halloffame.png'
import gid_landingpage from '../img/get-it-done-img/landingpage.png'
import gid_signin from '../img/get-it-done-img/sign-in.png'
import gid_tasks from '../img/get-it-done-img/tasks.png'
import gid_unlockables from '../img/get-it-done-img/unlockables.png'

// LMS revamp IMGS
import lms_Home from '../img/lms-img/home.png'
import lms_Notifications from '../img/lms-img/notifcations.png'
import lms_Search from '../img/lms-img/search.png'
import lms_NotifFail from '../img/lms-img/notifFail.png'
import lms_NotifSuccess from '../img/lms-img/notifSucess.png'

// Yahtzee imgs
import yh_MainMenu from '../img/yahtzee-haskell/main-menu.png'
import yh_ScoreCard from '../img/yahtzee-haskell/score-card.png'
import yh_ReRoll from '../img/yahtzee-haskell/re-roll.png'
import yh_FillZero from '../img/yahtzee-haskell/fill-zero.png'
import yh_GameOver from '../img/yahtzee-haskell/gameover.png'

import '../css/projectPage.css'

function Projects() {
    const [getItDoneArr, setGetItDoneArr] = useState([])
    const [lmsArr, setLmsArr] = useState([])
    const [yahtzeeArr, setYahtzeeArr] = useState([])
    const [fridgeArr, setFridgeArr] = useState([])


    useEffect(() => {
        const gidImgCap = [
            {caption: "Landing Page", desc: "Page opens on start up",img: gid_landingpage},
            {caption: "Sign In", desc: "Sign in with Google",img: gid_signin},
            {caption: "Tasks", desc: "Add tasks and set due dates",img: gid_tasks},
            {caption: "Unlockables", desc: "Unlock new features as you complete tasks",img: gid_unlockables},
            {caption: "Achievements", desc: "View your achievements",img: gid_AchImgs},
            {caption: "Hall of Fame", desc: "View the top users",img: gid_halloffame},
        ] 
        setGetItDoneArr(gidImgCap)

        const lmsImgCap = [
            {caption: "Home Page", desc: "Page opens on start up",img: lms_Home},
            {caption: "Notifications", desc: "View notifications",img: lms_Notifications},
            {caption: "Search", desc: "Search for courses",img: lms_Search},
            {caption: "Notification Success", desc: "Notification when a course is added",img: lms_NotifSuccess},
            {caption: "Notification Fail", desc: "Notification when a course is not added",img: lms_NotifFail},
        ]
        setLmsArr(lmsImgCap)

        const yahtzeeImgCap = [
            {caption: "Main Menu", desc: "Page opens on start up",img: yh_MainMenu},
            {caption: "Score Card", desc: "View your score card",img: yh_ScoreCard},
            {caption: "Re-Roll", desc: "Re-roll dice",img: yh_ReRoll},
            {caption: "Fill Zero", desc: "Fill in a zero",img: yh_FillZero},
            {caption: "Game Over", desc: "Game over",img: yh_GameOver},
        ]
        setYahtzeeArr(yahtzeeImgCap)
        
    }, [])



    return (
        <Parallax blur={10} bgImage={bgGrad} bgImageAlt="the cat" strength={100} >
        <div className='d-grid gap-3 pt-5'>
            
            <h1 className='text-center'>Projects</h1>
            <hr></hr>
            {/* <h5 className='text-center' >Completed</h5> */}
            <ProjectCard
                Name={"Get-it-Done: Gamified To-Do List"}
                c_id={"get-it-done"}
                Link={"https://get-it-done-gamefied.web.app/"}
                GithubLink={"https://github.com/ccb1139/Get-it-Done-Gamified-to-do-list"}
                imgs = {getItDoneArr}
                Description={"Get-it-Done is a gamified to-do list app that helps users stay organized and on track. Users can add tasks, set due dates, and earn achievements and customizations as they complete tasks. Developed during a GUI class at the University of Massachusetts Lowell, the app is an excellent example of applying programming, user interface design, and game mechanics to create a useful and engaging application. \n\nWith its unique features and focus on productivity, Get-it-Done is a great tool for anyone looking to stay motivated and organized."}
                TechUsed = {["React", "Firebase", "Bootstrap", "Node.js", "JavaScript", "HTML", "CSS"]}
                dark
            ></ProjectCard >
            <hr></hr>
            <ProjectCard
                Name={"Blackboard LMS notification re-vamp"}
                Link={""}
                GithubLink={"https://github.com/ccb1139/lms"}
                imgs = {lmsArr}
                Description={"The Blackboard LMS notification re-vamp is a project I completed for my Software Engineering class. The project aimed to improve the user experience of the Blackboard LMS notification system by implementing a more user-friendly interface. With this new interface, users can view their notifications in a more organized and accessible way. \n\nAdditionally, the system allows for filtering notifications by type and searching for courses, providing an added layer of convenience and customization. Overall, the Blackboard LMS notification re-vamp is a prime example of how software engineering can be used to improve the usability and functionality of existing software systems."}
                TechUsed = {["React", "Heroku", "Tailwind CSS", "Node.js", "JavaScript", "HTML", "CSS", "npm"]}
                dark
                ></ProjectCard>
            <hr></hr>
            <ProjectCard
                Name={"Yahtzee made in Haskell"}
                Link={""}
                GithubLink={"https://github.com/ccb1139/Yahtzee-Haskell"}
                imgs = {yahtzeeArr}
                Description={"I created a Yahtzee game in Haskell, a functional programming language. The game follows the traditional rules where players roll five dice and select which ones to keep before re-rolling the others up to two more times. The program calculates the score based on the combination achieved and updates the scorecard for 13 rounds. \n\nA significant challenge in creating the game was managing state without mutable variables, which required the use of monads and other techniques. Additionally, dealing with input/output was also challenging, as Haskell is a pure functional language that requires special techniques like IO monads to handle input and output effectively. Despite these challenges, the end result is a functional and enjoyable game of Yahtzee."}
                TechUsed = {["Haskell", "Haskell Stack", "Stack"]}
                ></ProjectCard>

            {/* <h5 className='text-center'>Work in progress</h5> */}


            
            <ProjectCard
                Name={"Pantry Pilot"}
                Link={""}
                c_id={"pantry-pilot"}
                
                GithubLink={"https://github.com/ccb1139/Workout-React-App"}
                imgs = {fridgeArr}
                Description={"Pantry Pilot is an innovative web app designed to help you keep track of your fridge's contents. With Pantry Pilot, users can easily add items to their fridge and set expiration dates to ensure they never forget about an item that's about to expire. The app will notify users when items are about to expire, so they can use them before it's too late. \n\nIn addition to its core features, Pantry Pilot has a lot of potential for expansion. Planned features include an automatic recipe recommendation system that suggests recipes based on the items in your fridge. This feature will help users make the most of the ingredients they have on hand and reduce food waste."}
                TechUsed = {["React", "Firebase", "Bootstrap"]}
            >

            </ProjectCard>
            
            
        </div>
        </Parallax>
    )
}

export default Projects