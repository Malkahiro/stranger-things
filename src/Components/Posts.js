import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchPosts, deletePost } from "../api/api";
const Posts = ({ isLoggedIn }) => {
    const [posts, setPosts] = useState([])
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
    const navigateNew = () => {
        navigate("/newpost")
    };
    const navigateMessage = () => {
        navigate("/newmessage")
    };
    useEffect(() => {
        fetchPosts()
            .then(results => {
                setPosts(results)
                console.log(results)
            }).catch(error => console.error(error))
    }, [])
    const removePost = async (post) => {
        if (post.active === true) {
            console.log(post._id)
            await deletePost(post._id)
            await fetchPosts()
                .then(results => {
                    setPosts(results)
                    console.log(results)
                }).catch(error => console.error(error))
        }
    }
    return (
        <>
            <div>
                <input id="search-posts" placeholder="Search Posts" value={(searchTerm)}
                    onChange={event => { event.preventDefault(); console.log(event.target.value); setSearchTerm(event.target.value) }} />
                <button id="search-button" type="button">Search</button>
                <span>
                    {isLoggedIn ? (
                        <button id="new-post-button" onClick={navigateNew}>
                            Create New Post</button>
                    ) : (
                        <div></div>
                    )}
                </span>
            </div>
            {
                posts.filter((post) => {
                    if (searchTerm === "") {
                        return post;
                    } else if (
                        (post.author._id.toLowerCase().includes(searchTerm.toLowerCase())) ||
                        (post.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
                        (post.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
                        (post.price.toLowerCase().includes(searchTerm.toLowerCase())) ||
                        (post.author.username.toLowerCase().includes(searchTerm.toLowerCase())) ||
                        (post.location.toLowerCase().includes(searchTerm.toLowerCase()))
                    )
                        return post
                }).map(post =>
                    <div id="post-box " key={post._id}>
                        <h2>{post.title}</h2>
                        <p>{post.description}</p>
                        <p>Price: {post.price}</p>
                        <h3>Seller: {post.author.username}</h3>
                        <p>Location: {post.location}</p>
                        <button>View</button>
                        {isLoggedIn && (post.isAuthor === false) ? (
                            <button onClick={navigateMessage}>Message User</button>
                        ) : (<div></div>)}
                        <div>
                            {post.isAuthor ? (
                                <button onClick={() => removePost(post)}>Delete</button>
                            ) : (<div></div>)}
                        </div>
                    </div>)
            }
        </>
    )
}
export default Posts;