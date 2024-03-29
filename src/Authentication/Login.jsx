import "./login.scss";
import Otp from "./Otp";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkOptClickedAction } from "../Redux/Actions/login";

function Login(info) {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [isRegister, setBoolRegister] = useState(true);
    const login = useSelector(state => state.checkLogin);
    const callOtp = useSelector(state => state.checkOptClicked);
    const [useFor, setUseFor] = useState("login");

    const registerFunction = ()=> {
        var formdata = new FormData();
        formdata.append("mobile", number);
        formdata.append("used_for", "register");

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch("https://api.theonlineattorney.in/api/v1/validate-phoneno/", requestOptions)
            .then(response => response.json())
            .then(result => {
                if(result.status === true) {
                    alert(result.message)
                    setUseFor("register");
                    dispatch(checkOptClickedAction());
                } else {
                    alert(result.message)
                }
            })
            .catch(error => console.log('error', error));
    }

    const loginFunction = ()=> {
        var formdata = new FormData();
        formdata.append("mobile", number);
        formdata.append("used_for", "login");

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        fetch("https://api.theonlineattorney.in/api/v1/validate-phoneno/", requestOptions)
            .then(response => response.json())
            .then(result => {
                if(result.status === true) {
                    alert(result.message)
                    setUseFor("login");
                    dispatch(checkOptClickedAction());
                } else {
                    alert(result.message)
                    setBoolRegister(false)
                }
            })
            .catch(error => console.log('error', error));
    }

    return (
        <>
            {
                callOtp ?
                null :
                <Otp num={number} useFor={useFor}/>
            }
            { login ?
                null :
                isRegister ? 
                <div className="loginBox" style={{top: info.top + "%"}}>
                    <div className="loginInnerSection">
                        <div className="loginInnerTop">
                            <h2>Mobile no</h2>
                        </div>
                        <div className="loginInnerBottom">
                            <input type={"tel"} placeholder={"Mobile no"} onChange={(e)=>setNumber(e.target.value)} />
                            <span className="inputPrefix">+91(IN)</span>
                        </div>
                    </div>
                    <div className="loginInnerSection">
                        <div className="loginInnerTop">
                            <h2>Name</h2>
                        </div>
                        <div className="loginInnerBottom">
                            <input type={"text"} placeholder={"Enter Your Name"} onChange={(e)=>setName(e.target.value)} />
                        </div>
                    </div>
                    <div className="loginInnerSectionEnd" style={{width: "20vw", display: "grid", gap: 10}}>
                        <div className="loginInnerTop">
                            <button style={{padding: "1rem", backgroundColor: "#FFCD6C", fontWeight: "600", border: "0px", outline: "0px", borderRadius: "50px", width: "20vw"}} onClick={()=>loginFunction()} disabled={name.length!==0 && number.length===10 ? false : true}>Sign In</button>
                        </div>
                        <div className="loginInnerBottom">
                            <div style={{width: "20vw", display: "grid", gridAutoFlow: "column", gap: "10px"}}>
                                <input type="checkbox" style={{transform: "translateY(-10px)"}} />
                                <p>I agree Terms & Conditions Already Registered? Login</p>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className="loginBox" style={{top: info.top + "%"}}>
                    <div className="loginInnerSection">
                        <div className="loginInnerTop">
                            <h2>Mobile no</h2>
                        </div>
                        <div className="loginInnerBottom">
                            <input type={"tel"} placeholder={"Mobile no"} onChange={(e)=>setNumber(e.target.value)} />
                            <span className="inputPrefix">+91(IN)</span>
                        </div>
                    </div>
                    <div className="loginInnerSection">
                        <div className="loginInnerTop">
                            <h2>Name</h2>
                        </div>
                        <div className="loginInnerBottom">
                            <input type={"text"} placeholder={"Enter Your Name"} onChange={(e)=>setName(e.target.value)} />
                        </div>
                    </div>
                    <div className="loginInnerSectionEnd" style={{width: "20vw", display: "grid", gap: 10}}>
                        <div className="loginInnerTop">
                            <button style={{padding: "1rem", backgroundColor: "#FFCD6C", fontWeight: "600", border: "0px", outline: "0px", borderRadius: "50px", width: "20vw"}} onClick={()=>registerFunction()} disabled={name.length!==0 && number.length===10 ? false : true}>Sign Up</button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Login;