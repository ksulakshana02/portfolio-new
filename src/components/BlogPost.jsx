import React, {useEffect, useState} from "react";
import {useParams, Link} from "react-router-dom";
import {client, urlFor} from "../client.js";
import {Helmet} from "react-helmet-async";
import {PortableText} from "@portabletext/react";
import Loader from "./Loader.jsx";

const BlogPost = () => {
    const {slug} = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const query = `*[slug.current == $slug][0]{
            title,
            publishedAt,
            category,
            body,
            "mainImage": mainImage.asset->url,
            seo {
                title,
                description,
                keywords,
                ogTitle,
                ogDescription,
                "ogImage": ogImage.asset->url,
                canonicalUrl
            }
        }`;

        client.fetch(query, {slug})
            .then((data) => {
                setPost(data);
                setLoading(false);
            })
            .catch(console.error);
    }, [slug]);

    // if (loading) return <div className="container" style={{paddingTop: "150px"}}>Loading...</div>;
    if (loading) return <Loader />;

    if (!post) return (
        <div className="container" style={{paddingTop: "150px", textAlign: "center"}}>
            <h1>Post not found</h1>
            <Link to="/blog">Back to Blog</Link>
        </div>
    );

    const seoTitle = post.seo?.title || post.title;
    const seoDesc = post.seo?.description || "A blog post by Kaveesha Sulakshana";
    const seoKeywords = post.seo?.keywords?.join(", ") || "Web Development, React, Coding";
    const ogImage = post.seo?.ogImage || post.mainImage;

    return (
        <section className="blog-post-section">
            <Helmet>
                {/* Standard Meta */}
                <title>{seoTitle} | Kaveesha Sulakshana</title>
                <meta name="description" content={seoDesc}/>
                <meta name="keywords" content={seoKeywords}/>
                {post.seo?.canonicalUrl && <link rel="canonical" href={post.seo.canonicalUrl}/>}

                {/* Open Graph (Facebook/LinkedIn) */}
                <meta property="og:title" content={post.seo?.ogTitle || seoTitle}/>
                <meta property="og:description" content={post.seo?.ogDescription || seoDesc}/>
                {ogImage && <meta property="og:image" content={ogImage}/>}
                <meta property="og:type" content="article"/>

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content={post.seo?.ogTitle || seoTitle}/>
                <meta name="twitter:description" content={post.seo?.ogDescription || seoDesc}/>
                {ogImage && <meta name="twitter:image" content={ogImage}/>}
            </Helmet>

            <div className="container blog-post-container">
                <Link to="/blog" className="back-link">
                    <i className="fa-solid fa-arrow-left"></i> Back to Blog
                </Link>

                <div className="post-header">
                    <span className="post-category">{post.category}</span>
                    <h1>{post.title}</h1>
                    <p className="post-date">Published on {new Date(post.publishedAt).toDateString()}</p>

                    {post.mainImage && (
                        <img
                            src={post.mainImage}
                            alt={post.title}
                            style={{width: '100%', borderRadius: '25px', marginTop: '20px'}}
                        />
                    )}
                </div>

                <div className="post-body">
                    <PortableText
                        value={post.body}
                        components={{
                            types: {
                                image: ({value}) => (
                                    <img
                                        src={urlFor(value).width(800).url()}
                                        alt="Post inline"
                                        style={{maxWidth: '100%', borderRadius: '10px', margin: '20px 0'}}
                                    />
                                )
                            }
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default BlogPost;