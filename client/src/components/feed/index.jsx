import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getPosts } from '../../api/posts.jsx';

import PostCard from './PostCard';



const Feed = () => {
    const [allPosts, setAllPosts] = useState([])
    const [offset, setOffset] =  useState(0)
    const [totalPages, setTotalPages] = useState(0)
    const [loading, setLoading] = useState(true)

//incrementer setoffset a la fin de la page
    
    
    const handleScroll = (event) => {
        const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
        if (scrollHeight - scrollTop === clientHeight && offset + 1 !== totalPages) {
            setOffset (prev => prev + 1);

        }
        
    }


    useEffect(() => {
       const loadPosts = async () => {
        setLoading(true);
        const newPosts = await getPosts(offset);
        setAllPosts([...allPosts, ...newPosts.data]);
        setTotalPages(newPosts.pageCount)
        setLoading(false)
    };
        loadPosts();
    }, [offset])
    
    
    return (
        <div className='feed-container' onScroll={handleScroll}>
            {allPosts.map((post) => (
            <PostCard post={post} key={post.postid} />
            ))}
            {loading && <div className='loading'>Loading ...</div>}  
        </div>
        
    );
};

export default Feed



/*
const getAllPosts = async () => await getPosts(offset)
    getAllPosts()
    .then ((res) => {
        setAllPosts([...allPosts, ...res.data])
    });

*/