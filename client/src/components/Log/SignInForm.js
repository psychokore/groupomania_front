import React, { useState } from "react";

const SignInForm = () =>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const emailError = document.querySelector('.email.error');
    const passwordError = document.querySelector('.password.error');

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
      if (res.data.errors){
        emailError.innerHTML = res.data.errors.email;
        passwordError.innerHTML = res.data.errors.password;
      } else {
        window.location = '/';
      }
    })
    .catch ((err) => {
      console.log(err);
    });
  };
  
  return (
    <form action="" onSubmit={handleLogin} id='sign-up-form'>
      
      <label htmlFor="email"> Email</label>
      <br/>
      <input 
        type='text' 
        name='email' 
        id='email' 
        onChange={(e) => setEmail(e.target.value)} 
        value={email}
      />
      <div className="email error"></div>
      <br/>

      <label htmlFor="password"> Mot de passe </label>
      <br/>
      <input 
        type='password' 
        name='password' 
        id='password' 
        onChange={(e) => setPassword(e.target.value)} 
        value={password}
      />
      <div className="password error"></div>
      <br/>

      <input type='submit' value='Connexion' />
    </form>
  );
};

export default SignInForm