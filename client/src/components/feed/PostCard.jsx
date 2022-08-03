import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { dateParser } from './date';
import { useState, useEffect } from 'react';
import Comments from './Comments';
import { getComments } from '../../api/comment'
import PostingComment from './PostingComment';
import { getLikes } from '../../api/like';
import { useSelector } from 'react-redux';




const PostCard = ({post}) => {
    const [allComments, setAllComments] = useState([])
    const [allLikes, setAllLikes] = useState([])
    const [offset, setOffset] =  useState(0)
    const [totalPages, setTotalPages] = useState(0)
    const [showComment, setShowComment] = useState(false);
    const postid = post.postid

    const token = useSelector((state) => state.user.token)
    const userId = useSelector((state) => state.user.userId)

    useEffect(() => {
        const loadComments = async () => {
         const newComments = await getComments(postid, offset, token, userId);
         setAllComments([...allComments, ...newComments.data]);
         setTotalPages(newComments.pageCount)
     };
        loadComments();
        const loadLikes = async () => {
            const newLikes = await getLikes(postid,token);
            console.log(newLikes.data)
            setAllLikes([...allLikes, ...newLikes.data])
         };
         loadLikes();
         
         
     }, [offset])
   



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
                    <p>{allLikes.length}</p>
                    <FontAwesomeIcon icon="fa-regular fa-heart" />
                </div>
                <div className='comments-container'>
                    <p>{allComments.length}</p>
                    <FontAwesomeIcon icon="fa-regular fa-comments" onClick={() => setShowComment(!showComment)} className={showComment ? 'active' : ''}/>   
                </div>
           </div>
           {showComment && allComments.map((comment) => (<Comments comment={comment} key={comment.commentid}/>))} 
           {showComment && <p className='show-more-comment' onClick={() => setOffset(offset + 1)}>Afficher plus de commentaire</p>/*offset et showcomment*/}
           {showComment && <PostingComment post={post} />}
        </div>
    );
};

export default PostCard;


/*
         


         */