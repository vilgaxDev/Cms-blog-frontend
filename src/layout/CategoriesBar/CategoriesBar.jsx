import useFetch from '../../hooks/useFetch';
import { NavLink } from 'react-router-dom'
import './CategoriesBar.css'

export default function CategoriesBar() {
    const { isLoading, error, data } = useFetch(
        "https://cms-blog-backend.onrender.com/api/categories?filters[$and][0][ShowOnHeader][$eq]=true"
    );
    if (isLoading) return;
    if (error) return;
    return (
        <div className="categories_bar">
            <div className="container">
                <ul className="menu">
                    <li>
                        <NavLink
                            to='/blogs'
                            className='nav_link'
                        >All Blogs</NavLink>
                    </li>
                    {data.data.map((link, index) => (
                        <li
                            key={index}
                        >
                            <NavLink
                                to={`/category/${link.attributes.Slug}`}
                                className='nav_link'
                            >
                                {link.attributes.Title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}