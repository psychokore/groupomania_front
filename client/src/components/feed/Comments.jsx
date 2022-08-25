import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { updateComment, deleteComment} from '../../api/comment';
import { useSelector } from 'react-redux';
import { useState } from 'react';



const Comments = ({comment}) => {
const [isUpdated, setIsUpdated] = useState(false);
const [textUpdate, setTextUpdate] = useState(null);

const token = useSelector((state) => state.user.token)
const userId = useSelector((state) => state.user.userId)
const isAdmin = useSelector((state) => state.user.isAdmin)
const commentid = comment.commentid


const updateItem = async (e) => {
    e.preventDefault();
    const updatedComment = await updateComment(commentid, textUpdate, token)
    setIsUpdated(false)
}

const deleteItem = async (e) => {
    e.preventDefault();
    const deletedComment = await deleteComment(commentid, token)
}

    return (
            <div className='comment' key={comment.commentid}>
                <FontAwesomeIcon icon="fa-regular fa-circle-user" />
                <div className='comment-content'>
                    <p className='comment-author'> {comment.authorpseudo} </p>
                    {isUpdated === false && <p className='comment-text'> {comment.content} </p>}
                    {isUpdated && (
                    <div className='update-comment'>
                        <textarea
                            className='updatecomment-textarea'
                            defaultValue={comment.message}
                            onChange={(e) => setTextUpdate(e.target.value)}
                            placeholder = {comment.content}
                        />
                        <div className='button-update'>
                            <FontAwesomeIcon icon="fa-regular fa-circle-right" onClick={updateItem}/>
                        </div>
                    </div>   
                )}
                {userId === comment.authorid && (
                    <div className='update-container'>
                        {isAdmin ? '':<FontAwesomeIcon icon="fa-regular fa-pen-to-square" onClick={() => setIsUpdated(!isUpdated)} />}
                        {isAdmin ? '':<FontAwesomeIcon icon="fa-regular fa-trash-can" onClick={deleteItem}/>}
                    </div>
                )}
                {isAdmin && (
                    <div className='delete-container'>
                        <FontAwesomeIcon icon="fa-regular fa-pen-to-square" onClick={() => setIsUpdated(!isUpdated)} />
                        <FontAwesomeIcon icon="fa-regular fa-trash-can" onClick={deleteItem}/>
                    </div>
                )}
                </div>
            </div>
    );
};

export default Comments;