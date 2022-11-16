import "./footer.scss";
import React from "react";
import logo from "./imgs/mainLogo.svg"
import fbimg from "./imgs/facebook.svg";
import inimg from "./imgs/instagram.svg";

function Footer() {
    return (
        <div className="footer">
            <div className="footerInner">
                <div className="footerInnerLeft">
                    <div className="footerInnerLeftLogo" style={{backgroundImage: "url(" + logo + ")"}}></div>
                    <button className="footerInnerLeftButton">LOG IN</button>
                    <div className="footerInnerLeftBottom">
                        <div className="footerInnerLeftBottomFbLogo" style={{backgroundImage: "url(" + fbimg + ")"}}></div>
                        <div className="footerInnerLeftBottomInstaLogo" style={{backgroundImage: "url(" + inimg + ")"}}></div>
                    </div>
                </div>
                <div className="footerInnerRight">
                    <div className="footerInnerRightLink">
                        <div className="footerInnerRightLinkSec">
                            <h2>CONTACT US</h2>
                            <div className="footerLinks">
                                <div>
                                    <h3>Phone</h3>
                                    <p>509-917-3307</p>
                                </div>
                                <div>
                                    <h3>Fax</h3>
                                    <p>403-678-8897</p>
                                </div>
                                <div>
                                    <h3>Email</h3>
                                    <p>info@advocate.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="footerInnerRightLinkSec">
                            <h2>LOCATIONS</h2>
                            <div className="footerLinks">
                                <div>
                                    <h3>Calgary</h3>
                                    <p>13th Street AW Building, Albert 1304</p>
                                </div>
                                <div>
                                    <h3>Bangalore, India</h3>
                                </div>
                            </div>
                        </div>
                        <div className="footerInnerRightLinkSec">
                            <h2>LINKS</h2>
                            <div className="footerLinks">
                                <h3>About</h3>
                                <h3>Lawyers</h3>
                                <h3>Wallet</h3>
                                <h3>Saved</h3>
                                <h3>Practice Areas</h3>
                                <h3>Contact</h3>
                                <h3>My Profile</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyRight">
                <p>Copyright © 2021 Advocate Find your Lawyers</p>
            </div>
        </div>
    )
}

export default Footer;