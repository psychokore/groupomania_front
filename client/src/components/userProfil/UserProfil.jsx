import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { deleteUserAccount, getUserData, updateUserAccount } from '../../api/auth';
import { logout } from '../../slices/userSlice';


const UserProfil = () => {
    const [userData, setUserData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [isUpdated, setIsUpdated] = useState(null)
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const dispatch = useDispatch()

    useEffect(() => {
        const loadUserData = async () => {
            const user = await getUserData()
            setUserData({...user.data})   
            setIsLoading(false) 
            setIsUpdated(false)
        }
        loadUserData()
    }, [])

    const deleteAccount = async (e) => {
        e.preventDefault();
        const deleteUser = await deleteUserAccount()
        dispatch(logout())

    }

    const updateProfil = async (e) => {
        e.preventDefault();
        const updatedUserData = await updateUserAccount(firstname, lastname)
        setIsUpdated(false)
    }

    return (
        <div className='profil-container'>
            <h1 className='data-title'> Mes informations</h1>
            {isUpdated === false && <>
            <div className='data-container'>
                <p className='label'>Nom</p>
                <p className='data'>{userData.firstname}</p>
                <p className='label'>Prénom</p>
                <p className='data'>{userData.lastname}</p>
            </div>
            <button className='delete-profil' onClick={deleteAccount}>Supprimer votre profil</button>
            <button className='update-profil'onClick={() => setIsUpdated(!isUpdated)} >Modifier votre profil</button>
            </>}
            {isUpdated && (
                <div className='update-profil'>
                    <form action='' onSubmit={updateProfil} id='update-profil-form'>

                        <label htmlFor="lastname">Nom</label>
                        <input 
                            className="textarea"
                            type='text' 
                            name='lastname'  
                            onChange={(e) => setLastname(e.target.value)} 
                            value={lastname}
                        />
        
                        <label htmlFor="firstname">Prénom</label>
                        <input 
                            className="textarea"
                            type='text' 
                            name='firstname'  
                            onChange={(e) => setFirstname(e.target.value)} 
                            value={firstname}
                        />

                        <input className="button-profil" type='submit' value='Valider' />   
                    </form>
                    <button className='cancel-button' onClick={() => setIsUpdated(!isUpdated)}>
                        <FontAwesomeIcon icon="fa-solid fa-arrow-left-long" /> 
                        Annuler
                    </button>
                </div>
            )}
        </div>
    );
};

export default UserProfil;