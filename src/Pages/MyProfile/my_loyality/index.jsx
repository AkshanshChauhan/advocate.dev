import React from "react";
import Background from "../../../Main/background";
import bg1 from "../../../Images/background5.svg";

import "./loyality.scss";

export default function MyLoyality(info) {
    return(
        <>
            <Background backgroundImage={bg1} height={info.height} top={info.top}/>
            <div className="my-loyalty">
                <div className="heading">MY LOYALTY</div>
                <div className="line"></div>
                <div className="subHeading">Customer loyalty describes an ongoing emotional relationship between
you and your customer, manifesting itself by how willing a customer is
to engage with and repeatedly purchase from you versus your competitors.
Loyalty is the by product of a customer's positive experience with
you and works to create trust</div>
                <div className="loyalty-point">
                    <div className="left">
                        <div className="head">Welcome Arshadul</div>
                        <div className="sub">Total Loyalty Points Gained</div>
                    </div>
                    <div className="right">
                        <div className="point">100</div>
                    </div>
                </div>
                <div className="recharge-card">
                    <div className="left">
                        <div className="write">
                        Recharge your wallet to claim a free pack 
worth of <b>₹200</b>
                        </div>
                        <div className="button">Recharge My Account</div>
                    </div>
                </div>
                <div className="box">
                    Points Earned on Recharge
                </div>
                <div className="upper">
                    <div className="left">
                        <div className="head">Avail Your Free Pack</div>
                        <div className="sub">This amount will be added to your wallet.</div>
                    </div>
                </div>
            </div>
        </>
    )
};