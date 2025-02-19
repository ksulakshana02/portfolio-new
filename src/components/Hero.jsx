import React from "react";
import TechStack from "./TechStack";

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="container">
                <div className="hero-main">
                    <div className="hero-overall">
                        <div className="hero-text">
                            <h1>
                                Full-stack / Web <br /> Developer{" "}
                                <span>
                                    <img src="assets/wave hand.png" alt="hand" />
                                </span>
                            </h1>
                            <p>
                                Hi, I&apos;m Kaveesha Sulakshana. A passionate Full-stack Web Developer and lifelong learner dedicated to crafting innovative and user-friendly web applications.
                            </p>
                            <div className="profile-links">
                                <a target="_blank" href="https://github.com/ksulakshana02">
                                    <i class="fa-brands fa-github"></i>
                                </a>
                                <a target="_blank" href="https://www.linkedin.com/in/ksulakshana">
                                    <i class="fa-brands fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                        <img src="assets/boy.jpg" alt="profile" />
                    </div>

                    <TechStack />
                </div>
            </div>
        </section>
    );
};

export default Hero;