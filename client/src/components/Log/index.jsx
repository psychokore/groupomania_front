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
            <ul>
                <li onClick={showSignInModal} id="login">Connexion</li>
                <li onClick={showSignUpModal} id="register" >S'inscrire</li>
            </ul>
            {signUpModal && <SignUpForm />}
            {signInModal && <SignInForm />}
        </div>
    </div>


  );
};

export default Log