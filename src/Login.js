import React from 'react';
import "./Login.css";
import {Button} from "@material-ui/core";
import {auth, provider} from "./Firebase";
import {login} from "./features/userSlice";
import {useDispatch} from "react-redux";

function Login() {
    const dispatch = useDispatch();
    const signIn = () => {
        //auth
        auth
            .signInWithPopup(provider)
            .then(({user}) => {
                dispatch(login({
                    displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL,
                }));
            })
            .catch(error => alert(error.message));
    };
    return <div className="login">
        <div className="login__container">
            <img src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_sq.jpg" alt=""/>
        </div>
        <Button variant="contained" color="primary" onClick={signIn}>
            Login
        </Button>
    </div>;
}

export default Login;