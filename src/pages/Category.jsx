import { useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import ArticleCart from '../components/ArticleCart/ArticleCart';
import SectionTitle from '../components/SectionTitle/SectionTitle';
import useFetch from '../hooks/useFetch';
import CategoriesBar from '../layout/CategoriesBar/CategoriesBar';
import formatDate from '../utils/formatDate';

export default function Category(props) {
   const { slug } = useParams()
   const { isLoading, error, data, setUrl } = useFetch();

   useEffect(() => {
      setUrl(`http://localhost:1337/api/blogs?filters[$and][0][categories][Slug][$eq]=${slug}&populate=author.photo,categories,image`);
   }, [slug, setUrl]);

   if (isLoading) return;
   if (error) return;

   const capitalizeText = str => str.charAt(0).toUpperCase() + str.slice(1);
   // console.log(data);
   // console.log(slug);

   return (
      <>
         <CategoriesBar />
         <section className="category_list section_container">
            <div className="container">
               <SectionTitle h1={capitalizeText(slug)} />
               <ul className="blogs_grid4">
                  {data.data.map((blog, index) => (
                     <li
                        key={index}
                        className="cart"
                     >
                        <ArticleCart
                           image={`http://localhost:1337${blog.attributes.image.data[0].attributes.formats.small.url}`}
                           title={blog.attributes.title}
                           link={`/${blog.attributes.Slug}`}
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
                     </li>
                  ))}
               </ul>
            </div>
         </section>
      </>
   )
}