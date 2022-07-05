import React, { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";


const Log = ( {signup, signin} ) =>{
    const [signUpModal, setSignUpModal] = useState(signup);
    const [signInModal, setSignInModal] = useState(signin);
    
    const showSignInModal = () => {
            setSignUpModal(false);
            setSignInModal(true);
    }

    const showSignUpModal = () => {
        setSignUpModal(true);
        setSignInModal(false);
    }

    return (
    <div className="connection-form">
        <div className="form-container">
            {signUpModal && <SignUpForm />}
            {signInModal && <SignInForm />}
        </div>
        <div className="button contaimer">
            <p>Déjà un compte?</p>
            <button onClick={showSignInModal} id='login'>Se connecter</button>
            <p>Pas encore inscrit?</p>
            <button onClick={showSignUpModal} id='login'>S'inscrire</button>
        </div>
         

    </div>


  );
};

export default Log