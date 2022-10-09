import React from 'react';
import '../css/navBar.css';
function NavBar(){
    return(
        <header class="header-container">
        <div class="header-bounds">
            <div class="nav-search">
                <a href="/">
                    <div class="shoocity-logo">
                        <h1 class="logo-title">Shoocity</h1>
                        <h2 class="logo-slogan">Inspiration Works</h2>
                    </div>
                </a> 
            </div>
        </div>
        </header>
    )
}

export default NavBar;