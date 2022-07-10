import React, { useState } from "react";
//import postSignup from "../../API/auth";
import {useNavigate} from 'react-router-dom';

const SignUpForm = () =>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [hasError, setHasError] = useState (false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const url = 'http://localhost:3000/api/auth/signup';
    const data = {
      email: email,
      firstname: firstname,
      lastname: lastname,
      password: password
    };

    fetch(url,{
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Accept" : "application/json",
        "Content-Type" : "application/json",
      }
    })
      .then((res) => {
        if (res.status !== 200) {
          return setHasError(true);
        } else {
          navigate('../', {replace: true});
        }
      })
      .catch ((err) => {
        console.log(err);
      });
  }


  return (
    <form action="" onSubmit={handleRegister} id='sign-up-form'>

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
      
        <label htmlFor="email">Email</label>
        
        <input 
          className="textarea"
          type='text' 
          name='email'  
          onChange={(e) => setEmail(e.target.value)} 
          value={email}
        />
        

        <label htmlFor="password">Mot de passe</label>
        
        <input
         className="textarea"
         type='password' 
          name='password'  
          onChange={(e) => setPassword(e.target.value)} 
          value={password}
        />
        {hasError && (
         <div className="error">Saisie incorrecte.</div>
        )}
      

        <input className="button" type='submit' value='Inscription' />
        </form>
  );
};

export default SignUpForm