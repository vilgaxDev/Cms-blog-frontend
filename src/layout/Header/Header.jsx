import { NavLink, Link } from 'react-router-dom'
import React, { useState } from 'react';
import Logo from '../../components/Logo/Logo';
import Button from '../../components/Buttons/Button';
// import ThemeSwitch from '../../components/ThemeSwitch/themeSwitch';
import NavBar from '../../components/NavBar/Navbar';
import './Header.css'

const Header = () => {
    return (
        <>
            <div className="headerLine"></div>
            <header className="site_header">
                <div className="container">
                    <div className="wrapper">
                        <Link to="/">
                            <Logo />
                        </Link>
                        <NavBar />
                        <Button
                            text="Subcribe"
                            link="/"
                            className="btn primary_btn"
                        />
                        {/* <ThemeSwitch /> */}
                        {/* <Button
                            text={
                                <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                            }
                            className={`toggle`}
                        /> */}
                    </div>
                </div>
            </header >
        </>

    )
}

export default Header