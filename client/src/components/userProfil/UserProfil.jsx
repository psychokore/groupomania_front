import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getUserData } from '../../api/auth';

const UserProfil = () => {
    const [userData, setUserData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const token = useSelector((state) => state.user.token)

    useEffect(() => {
        const loadUserData = async () => {
            const user = await getUserData(token)
            setUserData({...user.data})   
            setIsLoading(false) 
        }
        loadUserData()
    }, [])

    


    return (
        <div className='profil-container'>
            <h1 className='data-title'> Mes informations</h1>
            {isLoading ? <p>Chargement</p>: <>
            <div className='data-container'>
                <p className='label'>Nom</p>
                <p className='data'>{userData.firstname}</p>
                <p className='label'>Prénom</p>
                <p className='data'>{userData.lastname}</p>
                <p className='label'>Email</p>
                <p className='data'>{userData.email}</p>
            </div>
            <button className='delete-profil'>Supprimer votre profil</button>
            </>}
        </div>
    );
};

export default UserProfil;