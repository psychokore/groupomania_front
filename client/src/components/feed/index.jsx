import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getPosts } from '../../api/posts';
import PostCard from './PostCard';


const Feed = () => {
    const [allPosts, setAllPosts] = useState([])
    const [offset, setOffset] =  useState(0)
    const [totalPages, setTotalPages] = useState(0)
//incrementer setoffset a la fin de la page
    const getAllPosts = async () => await getPosts(offset)
    
    useEffect(() => {
        getAllPosts()
        .then ((res) => {
            setAllPosts([...allPosts, ...res.data])
        });
        
    }, [offset])
    
    
    return (
        <div className='feed-container'>
            {allPosts.map((post) => (
            <PostCard post={post} key={post.postid} />
            ))}
        </div>
    );
};

export default Feed



/*
{allPosts.map((post) => (
                <PostCard post={post} key={post._id} />
            ))}

*/