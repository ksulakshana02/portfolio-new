import React from "react";

const Portfolio = () => {
    return (
        <section className="portfolio" id="projects">
            <div className="container">
                <h3>PORTFOLIO</h3>
                <h1>Each project is a unique piece of development</h1>

                <div className="all-projects">
                    <div className="project">
                        <div className="project-text">
                            <h3>EDWIN - TUITION PLATFORM</h3>
                            <p className="project-desc">
                                Developed an e-tutoring platform that connects students with tutors for live interactive learning sessions. Designed a database schema to support user roles like students, tutors, and admins. Integrated Zoom API for seamless online classes and AWS S3 for secure file storage, ensuring a smooth and reliable experience.
                            </p>
                            <div className="project-stack">
                                <p>Next JS</p>
                                <p>Tailwind CSS</p>
                                <p>Express JS</p>
                                <p>Clerk Auth</p>
                                <p>MySQL</p>
                                <p>Sequelize</p>
                                <p>Zoom API</p>
                            </div>
                            <div className="project-links multi-links">
                                <a
                                    href="https://github.com/ksulakshana02/EDWin-web"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Code
                                    <i class="fa-brands fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="project-reverse">
                        <div className="project-text">
                            <h3>JOB PORTAL PLATFORM</h3>
                            <p className="project-desc">
                                Developed a job portal platform with user authentication, role-based access (job seekers and employers), and email alerts for job updates. Designed a mobile-friendly interface, integrated Cloudinary for file uploads, and used Docker for seamless deployment.
                            </p>
                            <div className="project-stack">
                                <p>React</p>
                                <p>Tailwind CSS</p>
                                <p>MongoDB</p>
                                <p>Express JS</p>
                                <p>JWT</p>
                                <p>Docker</p>
                            </div>
                            <div className="project-links">
                                <a
                                    href="https://github.com/ksulakshana02/job-portal"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Code
                                    <i class="fa-brands fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="project">
                        <div className="project-text">
                            <h3>SchoolX - SCHOOL DASHBOARD</h3>
                            <p className="project-desc">
                                Developed a school management system featuring a user-friendly admin dashboard for secure access by administrators, teachers, and students. Built a robust backend using Prisma and PostgreSQL, ensuring reliable data management. Used Docker for seamless deployment and designed a clean, responsive interface with Next.js and Tailwind CSS for an intuitive user experience.
                            </p>
                            <div className="project-stack">
                                <p>Next JS</p>
                                <p>Tailwind CSS</p>
                                <p>TypeScript</p>
                                <p>Prisma</p>
                                <p>PostgreSQL</p>
                                <p>Docker</p>
                            </div>
                            <div className="project-links">
                                <a
                                    href="https://github.com/ksulakshana02/school-management"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Code
                                    <i class="fa-brands fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="project-reverse">
                        <div className="project-text">
                            <h3>INVENTORY MANAGEMENT SYSTEM</h3>
                            <p className="project-desc">
                                Created an inventory management system to help users efficiently track and manage stock. The system includes a secure RESTful API with JWT authentication, a clean and user-friendly React interface, and reliable data storage using MySQL. Designed for simplicity and performance, it ensures smooth inventory operations.
                            </p>
                            <div className="project-stack">
                                <p>React</p>
                                <p>Spring Boot</p>
                                <p>MySQL</p>
                            </div>
                            <div className="project-links">
                                <a
                                    href="https://github.com/ksulakshana02/pos-backend"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Code
                                    <i class="fa-brands fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="project">
                        <div className="project-text">
                            <h3>WASTELESS - FOOD DONATION APP</h3>
                            <p className="project-desc">
                                Developed an Android app to reduce food waste by connecting food donors with those in need. The app features a simple interface for food donations, real-time notifications, and geolocation services to make the process efficient and user-friendly.
                            </p>
                            <div className="project-stack">
                                <p>Android SDK</p>
                                <p>Firebase</p>
                                <p>Google Maps API</p>
                            </div>
                            <div className="project-links">
                                <a
                                    href="https://github.com/ksulakshana02/Food-Donation-Android-App"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Code
                                    <i class="fa-brands fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;