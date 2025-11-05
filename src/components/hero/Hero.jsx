import { Link } from "react-router-dom";
import './hero.css'

export default function Hero() {
    return (
        <main className="foreground">
            <div className="content" aria-labelledby="heading">
                <img src="/PFP.jpg" className="profile-picture" alt="Profile Picture" />

                <div className="textContent">
                    <h1 id="heading">
                        I'm Martina Gonzales, a marketing and communications professional
                    </h1>

                    <p>
                        with experience in developing digital strategies, managing social media,
                        and creating content designed to strengthen brand presence. I'm passionate
                        about connecting with people through clear, authentic messages — combining
                        creativity with data analysis to deliver measurable results.
                    </p>

                    <div className="buttons">
                        <div className="app-links">
                            <a href="https://github.com/">
                                <img id="github" src="/icons8-github-64.png" alt="github" />
                            </a>
                            <a href="https://www.linkedin.com/home">
                                <img id="linkedin" src="/icons8-linkedin-64.png" alt="linkedin-circled--v1" />
                            </a>
                        </div>

                        <Link id="projectsBtn" to="/projects">View Projects</Link>                    </div>
                </div>
            </div>
        </main>
    )
}