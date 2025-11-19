import React, { useState } from "react";
import {Link, useLocation} from "react-router-dom";

const Navbar = () => {
    // Set Navbar background when scrolling down
    const [navBg, setNavBg] = useState("");

    const location = useLocation();

    const handleScroll = () => {
        if (window.scrollY > 10) {
            setNavBg("nav-bg");
        } else {
            setNavBg("");
        }
    };
    window.addEventListener("scroll", handleScroll);

    // Set Navbar on mobile
    const [nav, setNav] = useState(false);
    const openNav = () => {
        setNav(!nav);
    };

    const handleNavClick = (id) => {
        setNav(false); // Close mobile menu
        if (location.pathname !== "/") {
            // If we are on Blog page, we can't scroll to #about.
            // Simple solution: Link to "/"
        }
    };

    return (
        <>
            <nav>
                {/* Desktop */}
                <div className={`navbar ${navBg}`}>
                    <div className="navbar_logo">
                        <a href="/" onClick={() => window.scrollTo(0, 0)}>
                            <h1>Kaveesha Sulakshana</h1>
                        </a>
                    </div>

                    <ul className="navbar__links">
                        {/*<li>*/}
                        {/*    <a href="#home">Home</a>*/}
                        {/*</li>*/}
                        <li><Link to="/">Home</Link></li>
                        <li>
                            <a href="/#about">About</a>
                        </li>
                        <li>
                            <a href="/#projects">Projects</a>
                        </li>
                        <li>
                            <a href="/#contact">Contact</a>
                        </li>
                        <li><Link to="/blog">Blog</Link></li>
                    </ul>

                    <div className="mobile-hamb" onClick={openNav}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </div>

                {/* Mobile */}
                <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
                    <div className="mobile-navbar-close" onClick={openNav}>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                    <ul className="mobile-navbar__links">
                        {/*<li>*/}
                        {/*    <a onClick={openNav} href="/">*/}
                        {/*        Home*/}
                        {/*    </a>*/}
                        {/*</li>*/}
                        <li><Link onClick={openNav} to="/">Home</Link></li>
                        <li>
                            <a onClick={openNav} href="/#about">
                                About
                            </a>
                        </li>
                        <li>
                            <a onClick={openNav} href="/#projects">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a onClick={openNav} href="/#contact">
                                Contact
                            </a>
                        </li>
                        <li><Link onClick={openNav} to="/blog">Blog</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;