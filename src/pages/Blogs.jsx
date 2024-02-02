import BlogsList from "../components/BlogsList/BlogsList";
import CategoriesBar from "../layout/CategoriesBar/CategoriesBar";

export default function Blogs() {
   return (
      <>
         <CategoriesBar />
         <BlogsList
            fetch="https://cms-blog-backend.onrender.com/api/blogs?populate=author.photo,categories,image"
            titleH1="Blogs"
            className="section_container"
         />
      </>
   );
}