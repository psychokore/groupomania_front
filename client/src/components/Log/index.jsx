import React, { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";


const Log = ( {signup, signin} ) =>{
    const [signUpModal, setSignUpModal] = useState(signup);
    const [signInModal, setSignInModal] = useState(signin);

    const [signInButtonModal, setSignInButtonModal] = useState(false);
    const [signUpButtonModal, setSignUpButtonModal] = useState(true);
    
    const showSignInModal = () => {
            setSignUpModal(false);
            setSignInModal(true);
            setSignInButtonModal(true);
            setSignUpButtonModal(false);

    }

    const showSignUpModal = () => {
        setSignUpModal(true);
        setSignInModal(false);
        setSignInButtonModal(true);
        setSignUpButtonModal(false);
    }


    return (
    <div className="connection-form">
        <div className="form-container">
            {signUpModal && <SignUpForm />}
            {signInModal && <SignInForm />}
        </div>
        <div className="button contaimer">
            {signInButtonModal && (
            <div>
                <p>Déjà un compte?</p>
                <button onClick={showSignInModal} id='login'>Se connecter</button>  
            </div>
            )}
            {signUpButtonModal && (
            <div>
            <p>Pas encore inscrit?</p>
            <button onClick={showSignUpModal} id='login'>S'inscrire</button>
            </div>
            )}
        </div>
    </div>


  );
};

export default Log