import React from "react";
import { Link } from "react-router-dom";
const HeaderComponent=()=>{
    return (
        <div>
            <header id="header">
                <div class="container">
                <div id="logo" class="pull-left">       
                    <a href="#intro" class="scrollto"><img src="img/logo.png" alt="" title=""/></a>
                </div>
                <nav id="nav-menu-container">
                    <ul class="nav-menu">
                    <li class="menu-active"><Link to="/">Home</Link></li>
                    <li> <Link to="/Speakers">Speakers</Link></li>  
                    <li><a href="#schedule">Schedule</a></li>
                    <li><a href="#venue">Venue</a></li>                  
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#sponsors">Sponsors</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li class="buy-tickets"><a href="#buy-tickets">Buy Tickets</a></li>
                    </ul>
                </nav>
                </div>
            </header>
        </div>    
    );
}
export default HeaderComponent;