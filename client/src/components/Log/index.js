import React, { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

const Log = () =>{
    const [signUpModal, setSignUpModal] = useState(false);
    const [signInModal, setSignInModal] = useState(true);
    const handleModals = (e) => {
        if (e.target.id === "register") {
            setSignUpModal(true);
            setSignInModal(false);
        } else if (e.target.id === "login") {
            setSignUpModal(false);
            setSignInModal(true);
        }
    }
    return (
    <div className="connection-form">
        <div className="form-container">
            <ul>
                <li onClick={handleModals} id="login">Connexion</li>
                <li onClick={handleModals} id="register" >S'inscrire</li>
            </ul>
            {signUpModal && <SignUpForm />}
            {signInModal && <SignInForm />}
        </div>
    </div>

  );
};

export default Log