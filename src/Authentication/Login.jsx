import "./login.scss";
import Otp from "./Otp";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkOptClickedAction} from "../Redux/Actions/login";

function Login(info) {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const login = useSelector(state => state.checkLogin);
    const callOtp = useSelector(state => state.checkOptClicked);
    return (
        <>
            {
                callOtp ?
                null :
                <Otp />
            }
            { login ?
                null :
                <div className="loginBox" style={{top: info.top + "%"}}>
                    <div className="loginInnerSection">
                        <div className="loginInnerTop">
                            <h2>Mobile no</h2>
                        </div>
                        <div className="loginInnerBottom">
                            <input type={"tel"} placeholder={"Mobile no"} onChange={(e)=>setName(e.target.value)} />
                            <span className="inputPrefix">+91(IN)</span>
                        </div>
                    </div>
                    <div className="loginInnerSection">
                        <div className="loginInnerTop">
                            <h2>Name</h2>
                        </div>
                        <div className="loginInnerBottom">
                            <input type={"text"} placeholder={"Enter Your Name"} onChange={(e)=>setNumber(e.target.value)} />
                        </div>
                    </div>
                    <div className="loginInnerSectionEnd" style={{width: "20vw", display: "grid", gap: 10}}>
                        <div className="loginInnerTop">
                            <button style={{padding: "1rem", backgroundColor: "#FFCD6C", fontWeight: "600", border: "0px", outline: "0px", borderRadius: "50px", width: "20vw"}} onClick={()=>dispatch(checkOptClickedAction())} disabled={name.length===0 || number.length===0 ? true : false}>Sign Up</button>
                        </div>
                        <div className="loginInnerBottom">
                            <div style={{width: "20vw", display: "grid", gridAutoFlow: "column", gap: "10px"}}>
                                <input type="checkbox" style={{transform: "translateY(-10px)"}} />
                                <p>I agree Terms & Conditions Already Registered? Login</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Login;