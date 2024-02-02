import BlogDetails from "../components/BlogDetails/BlogDetails"
import BlogsList from "../components/BlogsList/BlogsList"

export default function BlogDetailsPage() {
    return (
        <>
            <BlogDetails />
            <BlogsList
                fetch="https://cms-blog-backend.onrender.com/api/blogs?populate=author.photo,categories,image"
                className="section_container latestBlogs"
                beginsFrom="0"
                Ends="4"
                grid="blogs_grid3"
                titleH1="Latest Blogs"
            />
        </>
    )
}