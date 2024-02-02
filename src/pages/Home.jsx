import BlogsList from "../components/BlogsList/BlogsList";
import SingleBlog from "../components/SingleArticle/SingleArticle";

export default function Home() {
   return (
      <>
         <SingleBlog />
         <BlogsList
            fetch="https://cms-blog-backend.onrender.com/api/blogs?populate=author.photo,categories,image"
            className="section_container"
            beginsFrom="0"
            Ends="5"
            titleH1="Latest Blogs"
         />
         <BlogsList
            fetch="https://cms-blog-backend.onrender.com/api/blogs?filters[$and][0][categories][Slug][$eq]=science&populate=author.photo,categories,image"
            className="section_container"
            beginsFrom="0"
            Ends="4"
            titleH1="Science"
         />
      </>
   );
}