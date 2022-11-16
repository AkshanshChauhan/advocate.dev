import React from "react";
import "../page.main.scss";
import Background from "../../Main/background";

function Contact(info) {
    return (
        <div className="contactPage">
            <Background backgroundImage={info.backgroundImage} height={info.height} top={info.top} />

        </div>
    )
}

export default Contact;