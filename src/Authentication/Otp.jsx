import "./login.scss";
import { useRef } from "react";
import {useDispatch} from "react-redux";
import React, { useEffect, useState } from "react";
import { checkOptClickedAgainAction, checkLoginAction} from "../Redux/Actions/login";

export default function Otp(info) {
    const otpInp1 = useRef();
    const otpInp2 = useRef();
    const otpInp3 = useRef();
    const otpInp4 = useRef();
    const [otp1, setOtpInp1] = useState(12);
    const [otp2, setOtpInp2] = useState(12);
    const [otp3, setOtpInp3] = useState(12);
    const [otp4, setOtpInp4] = useState(12);
    const [mainOtp, setMainOtp] = useState(0);
    const mainOtpVar = otp1 + "" + otp2 + "" + otp3 + "" + otp4;
    useEffect(()=>setMainOtp(mainOtpVar), [mainOtpVar]);
    const dispatch = useDispatch();

    var formdata = new FormData();
    var requestOptions = {};
    const verifyOtp = ()=> {
        if(info.useFor === "login") {
            formdata.append("mobile", info.num);
            formdata.append("used_for", "login");
            formdata.append("otp_sent", mainOtpVar);

            requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            };

            fetch("https://api.theonlineattorney.in/api/v1/validate-otp-phoneno/", requestOptions)
                .then(response => response.json())
                .then(result => {
                    if(result.msg === "Login Successful") {
                        alert(result.msg)
                        dispatch(checkLoginAction()); 
                        dispatch(checkOptClickedAgainAction());
                        localStorage.setItem("token", result.token.access);
                    } else {
                        otpInp1.current.value = null;
                        otpInp2.current.value = null;
                        otpInp3.current.value = null;
                        otpInp4.current.value = null;
                        alert(result.message)
                    }
                })
                .catch(error => console.log('error', error));
        } else {
            formdata.append("mobile", info.num);
            formdata.append("used_for", "register");
            formdata.append("otp_sent", mainOtpVar);

            requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            };

            fetch("https://api.theonlineattorney.in/api/v1/validate-otp-phoneno/", requestOptions)
                .then(response => response.json())
                .then(result => {
                    if(result.msg === "Login Successful") {
                        alert(result.msg)
                        dispatch(checkLoginAction()); 
                        dispatch(checkOptClickedAgainAction());
                        localStorage.setItem("token", result.token.access);
                    } else {
                        otpInp1.current.value = null;
                        otpInp2.current.value = null;
                        otpInp3.current.value = null;
                        otpInp4.current.value = null;
                        alert(result.message)
                    }
                })
                .catch(error => console.log('error', error));
        }
    }

    return (
        <div className="otpSection">
            <div className="otp">
                <div className="otpLeft">
                    <div className="otpLeftInnerLogo"></div>
                    <div className="otpLeftInnerBottomTextArea">
                        <div className="otpLeftInnerBottomText">
                            Consult lawayers online instantly with The Online Attorney
                        </div>
                    </div>
                </div>
                <div className="otpRight">
                    <div className="otpRightCrossSection">
                        <div className="otpRightCross" onClick={()=>dispatch(checkOptClickedAgainAction())}>X</div>
                    </div>
                    <div className="otpRightHeading">Enter OTP</div>
                    <div className="otpRightSubHeading">
                        OTP has been sent to you on your mobile number +91 88765 45690 <u>skdf</u>
                    </div>
                    <div className="otpRightSubHeading" style={{color: "black"}}>
                        Enter Otp
                    </div>
                    <div className="otpInputSection">
                        <input className="otpInput" type="rel" maxLength={1} ref={otpInp1} onChange={(e)=>{e.target.value.length>0 ? otpInp2.current.focus() : otpInp1.current.focus(); setOtpInp1(e.target.value)}} />
                        <input className="otpInput" type="rel" maxLength={1} ref={otpInp2} onChange={(e)=>{e.target.value.length>0 ? otpInp3.current.focus() : otpInp1.current.focus(); setOtpInp2(e.target.value)}} />
                        <input className="otpInput" type="rel" maxLength={1} ref={otpInp3} onChange={(e)=>{e.target.value.length>0 ? otpInp4.current.focus() : otpInp2.current.focus(); setOtpInp3(e.target.value)}} />
                        <input className="otpInput" type="rel" maxLength={1} ref={otpInp4} onChange={(e)=>{e.target.value.length>0 ? otpInp4.current.blur() : otpInp3.current.focus(); setOtpInp4(e.target.value)}} />
                    </div>
                    <button className="otpButton" onClick={()=>verifyOtp()} disabled={mainOtp.length===4 ? false : true}>Verify OTP</button>
                </div>
            </div>
        </div>
    )
}