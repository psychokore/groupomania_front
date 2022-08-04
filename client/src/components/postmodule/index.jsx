import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const PostModule = () => {
    const [content, setContent] = useState('')
    const [image, setImage] = useState(null)

    const userId = useSelector((state) => state.user.userId)
    const token = useSelector((state) => state.user.token)



    const handlePost = async (e) => {
        e.preventDefault();
    }
    
    
    return (
        <div className='postmodule-container'>
            <h1 className='post-title'> Publiez quelque chose</h1>
            <form action='' onSubmit={handlePost} id='publication-form'>
                <input 
                    className='post-content' 
                    name='content' 
                    onChange={(e) => setContent(e.target.value)} 
                    value={content} 
                />
                <input 
                    type='file'
                    id='image'
                    name='image'
                    accept='image/png, image/jpeg, image/gif, image/jpg'
                    onChange={(e) => setImage(e.target.files[0])}
                />
                <input className='post-button' type='submit' value='Publiez' />
            </form>
        </div>
    );
};

export default PostModule;