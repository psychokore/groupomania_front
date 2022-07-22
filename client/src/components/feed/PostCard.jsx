import React from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const PostCard = ({post}) => {
    

    useEffect(() => {

    })




    return (
        <div className='post-container' key={post.postid}>

           <div className='author-container'>
            <FontAwesomeIcon icon="fa-regular fa-circle-user" />
            <h2> {post.authorpseudo} </h2>
            <h3> date de publication </h3>
           </div>

           <div className='content-container'>
                <div className='content-text'> {post.content} </div>
                <div className='content-image'> mettre l'image </div>
           </div>
           
        </div>
    );
};

export default PostCard;