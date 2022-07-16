export const APIURL = `https://strangers-things.herokuapp.com/api/2204-FTB-ET-WEB-FT/`;
export const fetchPosts = async () => {
    try {
        const token = localStorage.getItem("token")
        const response = await fetch(`${APIURL}posts`,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            })
        const json = await response.json();
        const posts = await json.data.posts
        console.log("api posts", posts);
        return posts;
    } catch (error) {
        throw error;
    }
}
export const createPosts = async (addPost) => {
    const token = localStorage.getItem("token")
    const response = await fetch(`${APIURL}posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            post: addPost,
        }),
    });
    const result = await response.json();
    const newPost = result.data.post;
    return newPost;
};
export const modifyPost = async (posts, postId) => {
    try {
        const token = localStorage.getItem("token")
        const response = await fetch(`${APIURL}posts/${postId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                post: posts,
            }),
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
};
export const getUser = async () => {
    try {
        const token = localStorage.getItem("token")
        const response = await fetch(`${APIURL}users/me`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
};
export const deletePost = async (postId) => {
    try {
        const token = localStorage.getItem("token")
        console.log(postId)
        const response = await fetch(`${APIURL}posts/${postId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
};
export const sendMessage = async (postId, message) => {
    try {
        const token = localStorage.getItem("token")
        const response = await fetch(`${APIURL}posts/${postId}/messages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                message: {
                    content: message
                }
            })
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}