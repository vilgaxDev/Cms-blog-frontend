import { NavLink } from 'react-router-dom'

export default function NavBar(props) {
    const menuLinks = [
        { text: "Home", to: "/" },
        { text: "Blogs", to: "/blogs" },
    ]
    return (
        <nav className={`navBar ${props.className}`}>
            <ul>
                {menuLinks.map((item, index) => (
                    <li key={index}>
                        <NavLink
                            to={item.to}
                            className="navLink"
                        >
                            {item.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}