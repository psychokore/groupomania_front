import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getPosts } from '../../api/posts';
//import PostCard from './PostCard';


const Feed = () => {
    //const [loadPost, setLoadPost] = useState(true);
    const [allPosts, setAllPosts] = useState([])

    const getAllPosts = async () => await getPosts()
    
    useEffect(() => {
        getAllPosts()
        .then ((res) => {
            setAllPosts(res.data)
        });
        
    }, [])
    
    
    return (
        <div className='feed-container'>
            {allPosts.map((post) => <h2>{post.content}</h2>)}
        </div>
    );
};

export default Feed



/*
{allPosts.map((post) => (
                <PostCard post={post} key={post._id} />
            ))}

*/