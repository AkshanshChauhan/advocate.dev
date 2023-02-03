import React from "react";
import "../../page.main.scss";
import camera from "../imgs/camera.svg";
import Background from "../../../Main/background";
import editProfileDP from "../imgs/editProfileDP.svg";

import { useState } from "react";

export default function EditProfile(info) {
    const [gender, setGender] = useState("m");
    const [rightSectionOpt, setRightSectionOtp] = useState(1);
    return (
        <>
            <Background backgroundImage={info.backgroundImage} height={info.height} top={info.top} />
            <div className="editProfileMain">
                <div className="editProfile">
                    <div className="editProfileHead">Edit Profile</div>
                    <div className="dpsection">
                        <img className="editProfileDP" src={editProfileDP} width={150} height={150} alt={"editprofile dp"} />
                        <input type="file" id="hs" accept="image/*" hidden/>
                        <div style={{width: "40px", height: "40px", backgroundColor: "gray", borderRadius: "50%", backgroundImage: "url(" + camera + ")", backgroundPosition: "center", backgroundSize: 60, backgroundRepeat: "no-repeat", position: "absolute", bottom: 0, transform: "translateX(50px)", cursor: "pointer"}} onClick={()=>document.getElementById("hs").click()}></div>
                    </div>
                    <div className="editProfileInputs">
                        <div className="inp">
                            <p className="lable">Full Name</p>
                            <input className="input" type="text" placeholder="Rahul David" />
                        </div>
                        <div className="inp">
                            <p className="lable">Email</p>
                            <input className="input" type="email" placeholder="rahuldavid@gmail.com" />
                        </div>
                        <div className="inp">
                            <p className="lable">Number</p>
                            <input className="input" type="text" placeholder="892-344-5077" />
                        </div>
                        <div className="inp">
                            <p className="lable">City</p>
                            <input className="input" type="text" placeholder="Tezpur" />
                        </div>
                        <div className="stateAndZip">
                            <div className="inp">
                                <p className="lable">State</p>
                                <input className="input" type="text" placeholder="Assam" />
                            </div>
                            <div className="inp">
                                <p className="lable">Zip Code</p>
                                <input className="input" type="text" placeholder="789233" />
                            </div>
                        </div>
                        <div className="inp">
                            <p className="lable">Gender</p>
                            <div className="genderOpt">
                                <button className={gender==="m" ? "genbtnSel" : "genbtn"} onClick={()=>setGender("m")}>MALE</button>
                                <button className={gender==="f" ? "genbtnSel" : "genbtn"} onClick={()=>setGender("f")}>FEMALE</button>
                            </div>
                        </div>
                        <div className="lastBtns">
                            <button className="bth">Back To Home</button>
                            <button className="save">SAVE</button>
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