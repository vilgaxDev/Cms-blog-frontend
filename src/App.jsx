import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'

import './App.css'
// Pages
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import BlogsDetails from './pages/BlogDetailsPage'
import Category from './pages/Category'

// Layout
import Layout from './layout/Layout'

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/blogs' element={<Blogs />}></Route>
                    <Route path='/:slug' element={<BlogsDetails />}></Route>
                    <Route path='/category/:slug' element={<Category />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
