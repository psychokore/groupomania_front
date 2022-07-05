import React, { useState } from "react";
import postConnexion from "../../API/auth";


const SignInForm = () =>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState (false)

  const handleLogin = (e) => {
    e.preventDefault();

    postConnexion(email, password)
      .then((res) => {
        if (res.status !== 200) {
          return setHasError(true);
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