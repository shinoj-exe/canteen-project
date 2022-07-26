import React from 'react';
import './Header.css';

function Header(){
    return(
        <div>
            <header className="container">
                <nav>
                    <div className="logo"></div>
                    <ul class="nav-list">
                        <a href=""><li className="nav-items regular16">Home</li></a>
                        <a href=""><li className="nav-items regular16">About</li></a>
                        <a href=""><li className="nav-items regular16">Account</li></a>
                        <a href=""><li className="nav-items regular16">Contact</li></a>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header;