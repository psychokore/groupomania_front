import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Comments = ({comment}) => {
    return (
        <div className='comment-card'>
            <FontAwesomeIcon icon="fa-regular fa-circle-user" />
            <div className='comment-content'>
                <h2> {comment.authorpseudo} </h2>
                <p className='comment-text'> {comment.content} </p>
            </div>
        </div>
    );
};

export default Comments;