import "./login.scss";
import React from "react";

function Login(info) {
    return (
        <div className="loginBox" style={{top: info.top + "%"}}>
            <div className="loginInnerSection">
                <div className="loginInnerTop">
                    <h2>Mobile no</h2>
                </div>
                <div className="loginInnerBottom">
                    <input type={"tel"} placeholder={"Mobile no"}/>
                    <span className="inputPrefix">+91(IN)</span>
                </div>
            </div>
            <div className="loginInnerSection">
                <div className="loginInnerTop">
                    <h2>Name</h2>
                </div>
                <div className="loginInnerBottom">
                    <input type={"text"} placeholder={"Enter Your Name"} />
                </div>
            </div>
            <div className="loginInnerSectionEnd" style={{width: "20vw"}}>
                <div className="loginInnerTop">
                    <button style={{padding: "1rem", backgroundColor: "#FFCD6C", fontWeight: "600", border: "0px", outline: "0px", borderRadius: "50px", width: "20vw"}}>Sign Up</button>
                </div>
                <div className="loginInnerBottom">
                    <div style={{width: "20vw", display: "grid", gridAutoFlow: "column", gap: "10px"}}>
                        <input type="checkbox" />
                        <p>I agree Terms & Conditions Already Registered? Login</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;