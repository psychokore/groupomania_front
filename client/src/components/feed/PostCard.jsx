import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const PostCard = ({post}) => {
    const [isLoading, setIsLoading] = useState(true);
    const userData = useSelector((state) => state.userReducer);

    useEffect(() => {
        !userData.isEmpty && setIsLoading(false)
    }, [userData])




    return (
        <div className='post-container' key={post._id}>
            {isLoading ? (
                <i className='fas fa-spinner fa-spin'></i>
            ) : <h2>Test</h2> }
        </div>
    );
};

export default PostCard;