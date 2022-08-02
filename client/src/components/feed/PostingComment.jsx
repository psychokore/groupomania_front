import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { postComment } from '../../api/comment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const PostingComment = ({post}) => {
    const [comment, setComment] = useState('');

    const userId = useSelector((state) => state.user.userId)
    const id = post.postId;
    const token = useSelector((state) => state.user.token)
    

    const handleComment = async (e) => {
        e.preventDefault();

        const publishComment = await postComment(id, userId, comment, token)
        
        
    }


    return (
        <form action='' onSubmit={handleComment} id='comment-form'>
            <input
                className='commentarea'
                type='text'
                name='comment'
                onChange= {(e) => setComment(e.target.value)}
                value={comment}
                />

        <button className="publish-comment" type='submit' value=''>
            <FontAwesomeIcon icon="fa-regular fa-circle-right" />
        </button>
        </form>
    );
};

export default PostingComment;