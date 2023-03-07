import React from "react";
import Background from "../../Main/background";
import bg1 from "../../Images/background5.svg";

import "./cs.scss";
export default function Customer_Support(info) {
    return(
        <>
        <Background backgroundImage={bg1} height={info.height} top={info.top}/>
        <div className="customer-support">
            <div className="heading">CUSTOMER SUPPORT</div>
            <div className="line"></div>
            <div className="subHeading">Customer support is a range of customer services to assist
customers in making cost effective and correct use of a product.
It includes assistance in planning, installation, training, troubleshooting,
maintenance, upgrading, and disposal of a product.</div>
            <div className="cs-img"></div>
            <div className="solutions">
                <div className="solution-heading">
                    Popular Solutions
                </div>
                <div className="solution">
                    Account Settings
                </div>
                <div className="solution">
                    Safety & Covid-19 Queries
                </div>
                <div className="solution-heading">
                    F.A.Q
                </div>
                <div className="solution">
                    Services
                </div>
                <div className="solution">
                    Payment option
                </div>
                <div className="solution">
                    A guide to our Company
                </div>
            </div>
        </div>
        </>
    )
};