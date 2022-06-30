import React, { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

const Log = () =>{
    const [signUpModal, setSignUpModal] = useState(false);
    const [signInModal, setSignInModal] = useState(true);
    
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
            {signUpModal && <SignInForm />}
            {signInModal && <SignUpForm />}
        </div>
    </div>


  );
};

export default Log