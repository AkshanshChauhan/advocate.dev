import './navbar.scss';
import React, { useState } from "react";
import {Link} from "react-router-dom";
import mainLogo from '../Images/mainLogo.svg';
import mpic1 from "./imgs/mpic1.svg";
import mpic2 from "./imgs/mpic2.svg";
import mpic3 from "./imgs/mpic3.svg";
import mpic4 from "./imgs/mpic4.svg";
import mpic5 from "./imgs/mpic5.svg";
import mpic6 from "./imgs/mpic6.svg";
import mpic7 from "./imgs/mpic7.svg";

function NavBar() {
    const [pos, setPos] = useState("");
    const [myProfVis, setMyProfVis] = useState(true);
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
                <div className="navLinks" style={{cursor: 'pointer'}} onMouseOver={()=>setMyProfVis(false)}>MY PROFILE
                    <div className="myProfileLinks" style={myProfVis ? {display: 'none'} : {display: 'grid'}} onMouseLeave={()=>setMyProfVis(true)}>
                        <Link className="myProfileLink" to={"/myprofile/edit-profile"}><img src={mpic1} alt="myProfileIcon1" width={25} /> Edit Profile</Link>
                        <Link className="myProfileLink" to={"/myprofile/payments"}><img src={mpic2} alt="myProfileIcon2" width={25} /> Payments</Link>
                        <Link className="myProfileLink" to={"/myprofile/help-and-support"}><img src={mpic3} alt="myProfileIcon3" width={25} /> Help & Support</Link>
                        <Link className="myProfileLink" to={"/myprofile/wishlist"}><img src={mpic4} alt="myProfileIcon4" width={25} /> Wishlist</Link>
                        <Link className="myProfileLink" to={"/myprofile/wallet"}><img src={mpic5} alt="myProfileIcon5" width={25} /> Wallet</Link>
                        <Link className="myProfileLink" to={"/myprofile/my-loyalty-status"}><img src={mpic6} alt="myProfileIcon6" width={25} /> My Loyalty Status</Link>
                        <Link className="myProfileLink" to={"/myprofile/recent-services"}><img src={mpic7} alt="myProfileIcon7" width={25} /> Recent Services</Link>
                        <button className="myProfileBtn">Join as Advocate</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;