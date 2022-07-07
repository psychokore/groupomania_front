import React, { useState } from "react";
//import postConnexion from "../../API/auth";
import {useNavigate} from 'react-router-dom';

const SignInForm = () =>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState (false)
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();

    const url = 'http://localhost:3000/api/auth/login';
    const data = {
      email: email,
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
          navigate('../home', {replace: true});
        }
      })
      .catch ((err) => {
        console.log(err);
      });
  }
  
  
  return (
      <form action="" onSubmit={handleLogin} id='sign-in-form'>
      
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
         <div className="error">Les identifiants sont incorrects.</div>
        )}
      

        <input className="button" type='submit' value='Connexion' />
        </form>
  );
};


export default SignInForm