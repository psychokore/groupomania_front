import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { dateParser } from './date';
import { useState } from 'react';
import Comments from './Comments';



const PostCard = ({post}) => {
    
    const [showComment, setShowComment] = useState(false);

    




    return (
        <div className='post-container'>

           <div className='author-container'>
            <FontAwesomeIcon icon="fa-regular fa-circle-user" />
            <h2> {post.authorpseudo} </h2>
            <h3> {dateParser(post.create_at)} </h3>
           </div>

           <div className='content-container'>
                <div className='content-text'> {post.content} </div>
                { post.imageurl !== null && <img src={post.imageurl} alt=''/> }
           </div>

           <div className='interaction-container'>
                <div className='like-container'>
                    <p>2</p>
                    <FontAwesomeIcon icon="fa-regular fa-heart" />
                </div>
                <div className='comments-container'>
                    <p>45</p>
                    <FontAwesomeIcon icon="fa-regular fa-comments" onClick={() => setShowComment(!showComment)} />
                    {showComment && <Comments post={post} />}    
                </div>
           </div>
           
        </div>
    );
};

export default PostCard;


/*
const postid = post.postid
    const showCommentsModal = () =>  {
        setCommentsModal(true)
       }
    
    const handleComments = async (e) => {
       const loadComments =  await getComments(postid, offset);
       setAllComments([...allComments, ...loadComments.data]);
       showCommentsModal();
    }


{commentsModal && allComments.map((comment) => (
            <Comments comment={comment} key={comment.commentid} />
            ))}

*/