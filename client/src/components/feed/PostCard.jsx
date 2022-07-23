import React from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { dateParser } from './date';



const PostCard = ({post}) => {
    
    useEffect(() => {

    })




    return (
        <div className='post-container' key={post.postid}>

           <div className='author-container'>
            <FontAwesomeIcon icon="fa-regular fa-circle-user" />
            <h2> {post.authorpseudo} </h2>
            <h3> {dateParser(post.create_at)} </h3>
           </div>

           <div className='content-container'>
                <div className='content-text'> {post.content} </div>
                
           </div>

           <div className='interaction-container'>
                <div className='like-container'>
                    <p>2</p>
                    <FontAwesomeIcon icon="fa-regular fa-heart" />
                </div>
                <div className='comments-container'>
                    <p>45</p>
                    <FontAwesomeIcon icon="fa-regular fa-comments" />
                </div>
           </div>

        </div>
    );
};

export default PostCard;