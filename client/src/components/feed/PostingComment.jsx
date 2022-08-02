import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { postComment } from '../../api/comment';


const PostingComment = ({post}) => {
    const [content, setContent] = useState('');

    const authorid = useSelector((state) => state.user.userId)
    const postid = post.postId;
    

    const handleComment = async (e) => {
        e.preventDefault();

        const publishComment = await postComment(postid, authorid, content)
        
        
    }


    return (
        <form action='' onSubmit={handleComment} id='comment-form'>
            <input
                className='commentarea'
                type='text'
                name='comment'
                onChange= {(e) => setContent(e.target.value)}
                value={content}
                />

        <input className="publish-comment" type='submit' value='' />
        </form>
    );
};

export default PostingComment;