import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Comments = ({comment}) => {


    return (
            <div className='comment' key={comment.commentid}>
                <FontAwesomeIcon icon="fa-regular fa-circle-user" />
                <div className='comment-content'>
                    <p className='comment-author'> {comment.authorpseudo} </p>
                    <p className='comment-text'> {comment.content} </p>
                </div>
            </div>
    );
};

export default Comments;