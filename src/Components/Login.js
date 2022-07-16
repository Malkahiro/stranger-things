import React, { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { APIURL } from "../api/api";
const LogIn = ({ setIsLoggedIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const submit = async (event) => {
        event.preventDefault();
        await fetch(`${APIURL}users/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                user: {
                    username: username,
                    password: password
                }
            })
        }).then(response => response.json())
            .then(result => {
                console.log(result);
                localStorage.setItem("token", result.data.token)
                setIsLoggedIn(true)
            })
            .catch(console.error);
        navigate("/home");
    }
    return (
        <main className="form-signin w-100 m-auto">
            <form onSubmit={submit}>
                <h1 className="h3 mb-3 fw-normal">Sign In To Account</h1>
                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput" placeholder="username"
                        onChange={event => setUsername(event.target.value)}
                    />
                    <label htmlFor="floatingInput">Username</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                        onChange={event => setPassword(event.target.value)}
                    />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <button id="submit-button" className="w-100 btn btn-lg btn-primary" type="submit">Sign In</button>
            </form>
        </main>
    );
};
export default LogIn;