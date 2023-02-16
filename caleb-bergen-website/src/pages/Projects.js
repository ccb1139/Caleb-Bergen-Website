import React from 'react'
import { useState, useEffect } from "react";
import ProjectCard from '../components/ProjectCard'
import AchImgs from '../img/get-it-done-img/Acheivements.png'
import halloffame from '../img/get-it-done-img/halloffame.png'
import landingpage from '../img/get-it-done-img/landingpage.png'
import signin from '../img/get-it-done-img/sign-in.png'
import tasks from '../img/get-it-done-img/tasks.png'
import unlockables from '../img/get-it-done-img/unlockables.png'



function Projects() {
    const [getItDoneArr, setGetItDoneArr] = useState([])
    const [fridgeArr, setFridgeArr] = useState([])

    useEffect(() => {
        const tmp = [
            {caption: "Landing Page", desc: "Page opens on start up",img: landingpage},
            {caption: "Sign In", desc: "Sign in with Google",img: signin},
            {caption: "Tasks", desc: "Add tasks and set due dates",img: tasks},
            {caption: "Unlockables", desc: "Unlock new features as you complete tasks",img: unlockables},
            {caption: "Achievements", desc: "View your achievements",img: AchImgs},
            {caption: "Hall of Fame", desc: "View the top users",img: halloffame},
        ] 
        setGetItDoneArr(tmp)
    }, [])
    


    return (
        <div className='container'>
            <ProjectCard
                Name={"Get-it-Done"}
                Link={"https://get-it-done-gamefied.web.app/"}
                GithubLink={"https://github.com/ccb1139/Get-it-Done-Gamified-to-do-list"}
                imgs = {getItDoneArr}
                Description={"Get-it-Done is a gamified to-do list. It allows you to add tasks and set due dates. As you complete tasks you unlock new features. You can also view your achievements and the top users."}
                TechUsed = {["React", "Firebase", "Bootstrap"]}
            >
                
            </ProjectCard >
            <ProjectCard
                Name={"Fridge Tracker"}
                Link={""}
                GithubLink={"https://github.com/ccb1139/Workout-React-App"}
                imgs = {fridgeArr}
                Description={"Fridge Tracker is a web app that allows you to track the contents of your fridge. It allows you to add items to your fridge and set expiration dates. It will then notify you when items are about to expire."}
                TechUsed = {["React", "Firebase", "Bootstrap"]}
            >

            </ProjectCard>
            <ProjectCard
                Name={"Yahtzee made in Haskell"}
                Link={""}
                GithubLink={"https://github.com/ccb1139/Yahtzee-Haskell"}
                imgs = {fridgeArr}
                Description={"Yahtzee made in Haskell. This was a project for my Functional Programming class. It is a command line game of Yahtzee."}
                TechUsed = {["Haskell", "Haskell Stack", "Stack"]}
                ></ProjectCard>

            <ProjectCard
                Name={"Blackboard LMS notification re-vamp"}
                Link={""}
                GithubLink={"https://github.com/ccb1139/lms"}
                imgs = {fridgeArr}
                Description={"Blackboard LMS notification re-vamp. This was a project for my Software Engineering class. It is a re-vamp of the Blackboard LMS notification system. It allows you to view notifications in a more user friendly way."}
                TechUsed = {["React", "Firebase", "Tailwind CSS"]}
                ></ProjectCard>

        </div>
    )
}

export default Projects