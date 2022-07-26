import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import { getComments } from '../../api/comment'


const Comments = ({post}) => {
    const [allComments, setAllComments] = useState([])
    const [offset, setOffset] =  useState(0)
    const [totalPages, setTotalPages] = useState(0)

    const postid = post.postid

    useEffect(() => {
        const loadComments = async () => {
         const newComments = await getComments(postid, offset);
         setAllComments([...allComments, ...newComments.data]);
         setTotalPages([newComments.pageCount])
     };
         loadComments();
     }, [offset])



    return (
        <div className='comment-card'>
            {allComments.map((comment) => {
                return (
            <div className='comment' key={comment.commentid}>
                <FontAwesomeIcon icon="fa-regular fa-circle-user" />
                <div className='comment-content'>
                    <h2> {comment.authorpseudo} </h2>
                    <p className='comment-text'> {comment.content} </p>
                </div>
            </div>

            )})}
        </div>
    );
};

export default Comments;