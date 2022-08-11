import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getUserData } from '../../api/auth';

const UserProfil = () => {
    const [userData, setUserData] = useState()
    const token = useSelector((state) => state.user.token)

    useEffect(() => {
        const loadUserData = async () => {
            const user = await getUserData(token)
            setUserData({firstname: user.data.firstname, lastname: user.data.lastname, email: user.data.email})    
        }
        loadUserData()
    }, [])


    return (
        <div className='profil-container'>
            <h1 className='data-title'> Mes informations</h1>
            <div className='data-container'>
                <p className='label'>Nom</p>
                <p className='data'>Dupont</p>
                <p className='label'>Prénom</p>
                <p className='data'>Michel</p>
                <p className='label'>Email</p>
                <p className='data'>dupont.michel@gmail.com</p>
            </div>
            <button className='delete-profil'>Supprimer votre profil</button> 
        </div>
    );
};

export default UserProfil;