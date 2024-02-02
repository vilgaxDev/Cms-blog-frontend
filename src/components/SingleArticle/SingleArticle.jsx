import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import './SingleArticle.css'
import ArticleCart from "../ArticleCart/ArticleCart";
import formatDate from "../../utils/formatDate";

export default function SingleArticle() {
   const { isLoading, error, data } = useFetch(
      "http://localhost:1337/api/blogs?populate=author.photo,categories,image"
   );

   if (isLoading) return;
   if (error) return;
   // console.log(data.data[0].attributes.date);
   
   return (
      <div className="single_article">
         <div className="container">
            {data.data.slice(0, 1).map((blog, index) => (
               <ArticleCart
                  image={`http://localhost:1337${blog.attributes.image.data[0].attributes.formats.small.url}`}
                  title={blog.attributes.title}
                  link={`/${blog.attributes.Slug}`}
                  key={index}
                  className="single"
                  desc={blog.attributes.previewText}
                  tags={
                     blog.attributes.categories.data.map((item, key) => (
                        <li key={key}>
                           <Link to={`/category/${item.attributes.Slug}`}>
                              {item.attributes.Title}
                           </Link>
                        </li>
                     ))
                  }
                  date={formatDate(blog.attributes.date)}
                  authorImage={`http://localhost:1337${blog.attributes.author.data.attributes.photo.data.attributes.formats.thumbnail.url}`}
                  authorUsername={blog.attributes.author.data.attributes.fullname}
                  authorNickname={blog.attributes.author.data.attributes.nickname}
               />
            ))}
         </div>
      </div>
   );
}