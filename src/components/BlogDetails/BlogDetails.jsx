import { useParams } from "react-router-dom"
import { useEffect } from 'react';
import useFetch from "../../hooks/useFetch";
import Markdown from 'markdown-to-jsx'
import './BlogDetails.css'
import Author from "../ArticleCart/Author/Author";

export default function BlogDetails() {
    const { slug } = useParams()
    const { isLoading, error, data, setUrl } = useFetch();

    useEffect(() => {
        setUrl(`http://localhost:1337/api/blogs?filters[$and][0][Slug][$eq]=${slug}&populate=author.photo,categories,image`);
    }, [slug, setUrl]);

    if (isLoading) return;
    if (error) return;

    // console.log(data.data[0].attributes.author.data.attributes.photo.data.attributes.url);
    // console.log(data.data[0].attributes.image.data[0].attributes.url);

    return (
        <>
            <div className="article_details">
                <div className="article_preview block">
                    <div className="container">
                        <div className="wrapper">
                            <div className="title">
                                <h1>{data.data[0].attributes.title}</h1>
                            </div>
                            <div className="preview_text">
                                <p>{data.data[0].attributes.previewText}</p>
                            </div>
                            <Author
                                authorImage={`http://localhost:1337${data.data[0].attributes.author.data.attributes.photo.data.attributes.url}`}
                                authorUsername={data.data[0].attributes.author.data.attributes.fullname}
                                authorNickname={data.data[0].attributes.author.data.attributes.nickname}
                            />
                        </div>
                    </div>
                </div>
                <div className="article_image">
                    <img
                        src={`http://localhost:1337${data.data[0].attributes.image.data[0].attributes.url}`}
                        width="300"
                        alt=""
                    />
                </div>
                <div className="article_content block">
                    <div className="container">
                        <div className="details">
                            <Markdown>{data.data[0].attributes.content}</Markdown>
                        </div>
                    </div>
                </div>
            </div>

        </>


    )
}