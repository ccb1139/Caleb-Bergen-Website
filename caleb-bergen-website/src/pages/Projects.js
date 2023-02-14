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
            >
                Get it Done allows users to dynamically
                set tasks that they must complete in the future. On a normal task manager, completing a task amounts to
                simply checking it off as complete without any payoff. Get it Done rewards the user for persistence and
                gives them an incentive to return. This solves the issue of apathy, as even if the user could live without
                doing a task, leaving it incomplete has them lose out on the possibility of a reward. This results in more
                consistent use by the user, more tasks added, and more tasks completed. This consistency in terms of
                userbase is a feature that would make the application highly valuable to users and more marketable to
                advertisers, resulting in a positive outcome for both user and developer.
            </ProjectCard >

        </div>
    )
}

export default Projects