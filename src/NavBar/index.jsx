import './navbar.scss';
import React, { useState } from "react";
import {Link} from "react-router-dom";
import mainLogo from '../Images/mainLogo.svg';

function NavBar() {
    const [pos, setPos] = useState("");
    window.onscroll = ()=> setPos(window.scrollY);
    return(
        <div className="navbar" style={{top: pos>200 ? "-120px" : "0px"}}>
            <div className="upperNav">
                <img style={{width: "12rem", marginTop: "2rem"}} src={mainLogo} alt=""></img>
                <div className="loginSection"><Link className="loginLink">LOGIN</Link></div>
            </div>
            <div className="lowerNav">
                <Link className="navLinks" to={"/"}>HOME</Link>
                <Link className="navLinks" to={"/lawyers"}>LAWYERS</Link>
                <Link className="navLinks" to={"/affidavit"}>AFFIDAVIT</Link>
                <Link className="navLinks" to={"/contact"}>CONTACT</Link>
                <Link className="navLinks" to={"/myprofile"}>MY PROFILE</Link>
            </div>
        </div>
    )
}

export default NavBar;