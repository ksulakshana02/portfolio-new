import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {client} from "../client.js";
import Loader from "./Loader.jsx";

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // GROQ Query
        const query = `*[_type == "post"] | order(publishedAt desc) {
            title,
            slug,
            category,
            publishedAt,
            summary
        }`;

        client.fetch(query)
            .then((data) => {
                setPosts(data);
                setLoading(false);
            })
            .catch(console.error);
    }, []);

    // if (loading) return <div className="container" style={{paddingTop:"150px"}}>Loading...</div>;
    if (loading) return <Loader />;

    return (
        <section className="blog-section">
            <div className="container">
                <div className="blog-header">
                    <h3>LATEST ARTICLES</h3>
                    <h1>Insights & Tutorials</h1>
                </div>

                <div className="blog-grid">
                    {posts.map((post) => (
                        <article className="blog-card" key={post.id}>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <span className="blog-category">{post.category}</span>
                                    <span className="blog-date">{new Date(post.publishedAt).toDateString()}</span>
                                </div>
                                <Link to={`/blog/${post.slug.current}`} className="blog-title-link">
                                    <h3>{post.title}</h3>
                                </Link>
                                <p className="blog-summary">{post.summary}</p>
                                <div className="blog-footer">
                                    <Link to={`/blog/${post.slug.current}`} className="read-more">
                                        Read More <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;