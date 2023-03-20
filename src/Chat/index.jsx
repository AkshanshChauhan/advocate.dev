import React from "react";
import "./chat.scss";
export default function Chat() {
    return (
        <>
            <div className="chat">
                <div className="nav">
                    <div className="left-section">
                        <div className="back-icon"></div>
                        <div className="person-icon"></div>
                        <div className="person-name">John Smit</div>
                    </div>
                    <div className="right-section">
                        <div className="upper-ar">
                            <div className="fade">Additional Services <span className="not-fade">| Legal Notice</span></div>
                        </div>
                        <div className="lower-ar">
                            ₹ 50
                        </div>
                    </div>
                </div>
                <div className="chatting-section"></div>
                <div className="messaging-section">
                    <div className="clip-icon"></div>
                    <input type="text" placeholder="Type something..." suggestion="false"/>
                    <div className="send-icon"></div>
                </div>
            </div>
        </>
    )
}