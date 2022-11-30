import "./contact.scss";
import React from "react";
import call from "./imgs/call.svg";

export default function ContactLeft() {
    return(
        <div className="contactLeft">
            <p className="contactLeftHead">We’re here for all criminal offences including sexual offences, domestic offences, violent offences, white-collar crime and drug offences.</p>
            <p className="contactLeftFatHead">CALL US 24 HOURS, 7 DAYS A WEEK, ANYTIME, DAY OR NIGHT:</p>
            <p className="contactLeftNumber"><img src={call} alt="" style={{width: 30, paddingRight: 10}}></img>480-976-8879</p>
            <div>
                <p className="contactLeftLowerHead">Email</p>
                <p className="contactLeftLowerSub">advocate@gmail.com</p>
            </div>
            <div>
                <p className="contactLeftLowerHead">Office Hours</p>
                <p className="contactLeftLowerSub">Monday - Friday: 8:00 AM to 4:30 PM</p>
            </div>
        </div>
    )
}