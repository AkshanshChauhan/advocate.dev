import "./contact.scss";
import React from "react";
import "../page.main.scss";
import Footer from "../../Footer";
import ContactLeft from "./contactLeft";
import ContactRight from "./contactRight";
import Background from "../../Main/background";

function Contact(info) {
    return (
        <div className="contactPage">
            <Background backgroundImage={info.backgroundImage} height={info.height} top={info.top} />
            <h1 className="contactHead">CONTACT US, GET HELP NOW</h1>
            <div className="contactContent">
                <ContactLeft />
                <ContactRight />
            </div>
            <Footer />
        </div>
    )
}

export default Contact;