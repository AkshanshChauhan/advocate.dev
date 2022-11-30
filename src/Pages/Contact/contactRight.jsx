import "./contact.scss";
import React from "react";
import { useState } from "react";

export default function ContactRight() {
    const [contactInputLen, setInputCounter] = useState(0);
    return (
        <div className="contactRight">
            <section>
                <p className="contactLable">Your Name*</p>
                <input className="contactInput" type="text" />
            </section>
            <section>
                <p className="contactLable">Email*</p>
                <input className="contactInput" type="email" />
            </section>
            <section>
                <p className="contactLable">Phone no*</p>
                <input className="contactInput" type="tel" />
            </section>
            <section>
                <p className="contactLable">Message/Questions</p>
                <input className="contactInput" type="text" maxLength={400} onChange={(e)=>setInputCounter(e.target.value.length)} />
                <p className="contactInputCounter">{400 - contactInputLen + "/" + 400}</p>
            </section>
            <button className="contactSendButton">SEND</button>
        </div>
    )
}