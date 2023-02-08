import React, { useEffect } from "react";
import "../../page.main.scss";
import camera from "../imgs/camera.svg";
import Background from "../../../Main/background";
import editProfileDP from "../imgs/editProfileDP.svg";

import { useState } from "react";

export default function EditProfile(info) {
    const [gender, setGender] = useState("1");
    const [rightSectionOpt, setRightSectionOtp] = useState(1);
    const [profileDP, setProfileDP] = useState(editProfileDP);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    // const [number, setNumber] = useState("");
    const [city, setCity] = useState("");
    const [stat, setStat] = useState("");
    // const [zipCode, setZipCode] = useState("");
    const [placeholders, setPlaceholders] = useState([]);
    
    const [postedData, setPostedData] = useState(true);

    function base64(file) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            setProfileDP(reader.result);
            localStorage.setItem("base64img", reader.result);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    const placeholderData = ()=> {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://api.theonlineattorney.in/api/v1/profile/", requestOptions)
            .then(response => response.json())
            .then(result => {
                setPlaceholders(result);
            })
            .catch(error => console.log('error', error)); 
    }

    const updateMyInformation = ()=> {
        setPostedData(false);
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

        var formdata = new FormData();
        formdata.append("first_name", name.split(" ")[0]);
        formdata.append("last_name", name.split(" ")[1] ? name.split(" ")[1] : "");
        formdata.append("email", email);
        formdata.append("profile_pic", localStorage.getItem("base64img").split(",")[1]);
        formdata.append("address", stat + " " + city);
    
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch("https://api.theonlineattorney.in/api/v1/profile/", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setPostedData(true);
                alert(result.message)
            })
            .catch(error => {
                console.log('error', error);
                setPostedData(true);
            });
    }

    useEffect(()=>{
        placeholderData();
    }, []);
    return (
        <>
            <div className="loader" style={{display: postedData ? "none" : "flex"}}>
                <div className="ring"></div>
            </div>
            <Background backgroundImage={info.backgroundImage} height={info.height} top={info.top} />
            <div className="editProfileMain">
                <div className="editProfile">
                    <div className="editProfileHead">Edit Profile</div>
                    <div className="dpsection">
                        <img className="editProfileDP" src={placeholders.profile_pic!==undefined ? "https://api.theonlineattorney.in" + placeholders.profile_pic : profileDP} width={150} height={150} alt={"editprofile dp"}/>
                        <input type="file" id="hs" accept="image/*" hidden onChange={(e)=>{console.log(base64(e.target.files[0]))}}/>
                        <div style={{width: "40px", height: "40px", backgroundColor: "gray", borderRadius: "50%", backgroundImage: "url(" + camera + ")", backgroundPosition: "center", backgroundSize: 60, backgroundRepeat: "no-repeat", position: "absolute", bottom: 0, transform: "translateX(50px)", cursor: "pointer"}} onClick={()=>document.getElementById("hs").click()}></div>
                    </div>
                    <div className="editProfileInputs">
                        <div className="inp">
                            <p className="lable">Full Name</p>
                            <input className="input" type="text" placeholder={placeholders.first_name!==undefined ? placeholders.first_name : "Rahul David"} onChange={(e)=>setName(e.target.value)} />
                        </div>
                        <div className="inp">
                            <p className="lable">Email</p>
                            <input className="input" type="email" placeholder={placeholders.email!==undefined ? placeholders.email : "rahuldavid@gmail.com"} onChange={(e)=>setEmail(e.target.value)} />
                        </div>
                        <div className="inp">
                            <p className="lable">Number</p>
                            <input className="input" type="text" placeholder={placeholders.mobile!==undefined ? placeholders.mobile : "892-344-5077"} disabled={true} />
                        </div>
                        <div className="inp">
                            <p className="lable">City</p>
                            <input className="input" type="text" placeholder={placeholders.city!==undefined ? placeholders.city : "Tezpur"} onChange={(e)=>setCity(e.target.value)} />
                        </div>
                        <div className="stateAndZip">
                            <div className="inp">
                                <p className="lable">State</p>
                                <input className="input" type="text" placeholder={placeholders.state!==undefined ? placeholders.state : "Assam"} onChange={(e)=>setStat(e.target.value)} />
                            </div>
                            <div className="inp">
                                <p className="lable">Zip Code</p>
                                <input className="input" type="text" placeholder={placeholders.zipcode!==undefined ? placeholders.zipcode : "789233"} disabled={true} />
                            </div>
                        </div>
                        <div className="inp">
                            <p className="lable">Gender</p>
                            <div className="genderOpt">
                                <button className={gender==="1" ? "genbtnSel" : "genbtn"} onClick={()=>setGender("1")} onChange={(e)=>setGender(e.target.value)} >MALE</button>
                                <button className={gender==="2" ? "genbtnSel" : "genbtn"} onClick={()=>setGender("2")} onChange={(e)=>setGender(e.target.value)} >FEMALE</button>
                            </div>
                        </div>
                        <div className="lastBtns">
                            <button className="bth">Back To Home</button>
                            <button className="save" onClick={()=>updateMyInformation()}>SAVE</button>
                        </div>
                    </div>
                </div>
                <div className="rightSection">
                    <div className="rightOpt" style={rightSectionOpt===1 ? {backgroundColor: "rgb(239, 239, 230)", color: "black"} : {}} onClick={()=>setRightSectionOtp(1)}>About Us</div>
                    <div className="rightOpt" style={rightSectionOpt===2 ? {backgroundColor: "rgb(239, 239, 230)", color: "black"} : {}} onClick={()=>setRightSectionOtp(2)}>Contact</div>
                    <div className="rightOpt" style={rightSectionOpt===3 ? {backgroundColor: "rgb(239, 239, 230)", color: "black"} : {}} onClick={()=>setRightSectionOtp(3)}>Help</div>
                    <div className="rightOpt" style={rightSectionOpt===4 ? {backgroundColor: "rgb(239, 239, 230)", color: "black"} : {}} onClick={()=>setRightSectionOtp(4)}>FAQ</div>
                </div>
            </div>
        </>
    )
}