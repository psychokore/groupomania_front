import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getPosts } from '../../api/posts';
import PostCard from './PostCard';


const Feed = () => {
    //const [loadPost, setLoadPost] = useState(true);
    const [allPosts, setAllPosts] = useState([])

    const getAllPosts = async () => await getPosts()
    
    useEffect(() => {
        getAllPosts()
        .then ((res) => {
            return res.data
        });
        const dataPosts = getAllPosts.data
        if (dataPosts) {
            setAllPosts((prevState) => [...prevState, ...dataPosts])
        }
    }, [])
    
    
    return (
        <div className='feed-container'>
            {allPosts.map((post) => (
                <PostCard post={post} key={post._id} />
            ))}
        </div>
    );
};

export default Feed



/*
{getAllPosts ? getAllPosts.map((post) => {
                    return <PostCard post={post} key={post._id} />
                }) : 'Nothing to load'} 

*/