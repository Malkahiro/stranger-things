import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
    return (
        <div id="nav-bar">
            <h3 id="nav-title">Stranger's Things</h3>
            <div id="nav-links">
                <div>
                    {isLoggedIn ? (
                        <div>
                            <span>
                                <Link to="/home">Home</Link>
                            </span>
                            <span>
                                <Link to="/posts">Posts</Link>
                            </span>
                            <span>
                                <Link to="/profile">Profile</Link>
                            </span>
                            <span>
                                <Link
                                    to="/"
                                    onClick={() => {
                                        localStorage.removeItem("token");
                                        setIsLoggedIn(false);
                                    }}
                                >
                                    Logout
                                </Link>
                            </span>
                        </div>
                    ) : (
                        <div>
                            <div>
                                <span>
                                    <Link to="/posts">Posts</Link>
                                </span>
                                <span>
                                    <Link to="/login">Login</Link>
                                </span>
                                <span>
                                    <Link to="/register">Resgister</Link>
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default Navbar;