import Logo from '../../components/Logo/Logo';
import ThemeSwitch from '../../components/ThemeSwitch/themeSwitch';
import NavBar from '../../components/NavBar/Navbar';
import './Footer.css'

export default function Footer() {
    return (
        <div className="site_footer">
            <div className="foot_main">
                <div className="container">
                    <div className="wrapper">
                        <div className="left">
                            <Logo />
                        </div>
                        <NavBar />
                        <div className="right">
                            <ThemeSwitch />
                        </div>
                    </div>
                </div>
            </div>
            <div className="foot_bottom">
                <div className="container">
                    <p>© 2024 Blog App powered by kenbrian  #vilgax dev# . All Rights Reserved</p>
                </div>
            </div>

        </div>
    )
}