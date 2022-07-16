import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Components/Navbar';
import Welcome from './Components/Welcome';
import Posts from './Components/Posts';
import Register from './Components/Register';
import Login from './Components/Login';
import Home from './Components/Home';
import NewPost from './Components/NewPosts';
import NewMessage from './Components/NewMessage';
// import Profile from './Components/Profile';
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        if (localStorage.getItem("token")) {
            setIsLoggedIn(true);
        }
    }, []);
    return (
        <div className="App">
            <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <Welcome />
            <Routes>
                <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/home" element={<Home />} />
                <Route path="/posts" element={<Posts isLoggedIn={isLoggedIn} />} />
                <Route path="/newpost" element={<NewPost isLoggedIn={isLoggedIn} />} />
                <Route path="/newmessage" element={<NewMessage isLoggedIn={isLoggedIn} />} />
            </Routes>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BrowserRouter><App /></BrowserRouter>);