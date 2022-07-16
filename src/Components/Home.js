import React, { useState, useEffect } from 'react';
import { getUser } from "../api/api";
const Home = ({ token }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        if (localStorage.getItem("token")) {
            setIsLoggedIn(true);
        }
    }, [token]);
    return (
        <>
            {isLoggedIn}
            <div>
                <h2 id="home-title">Logged In As </h2>
            </div>
        </>
    )
}
export default Home;