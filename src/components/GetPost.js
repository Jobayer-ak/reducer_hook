import axios from 'axios';
import React, { useEffect, useState } from 'react';

const GetPost = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [post, setPost] = useState({});

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts/1`;
        axios.get(url)
        .then(res=> {
            setLoading(false);
            setPost(res.data);
            setError("");
        })
        .catch(err=> {
            setLoading(false);
            setPost({});
            setError(err.message);
        })
    },[])

    return (
        <div>
            {loading? "Loading.....": post.title}
            {error || null }
        </div>
    );
};

export default GetPost;