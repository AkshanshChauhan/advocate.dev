import React from "react";
import "./affiForm.scss";

export default function AffiFormThree(info) {
    return (
        <div className="affiFormOne">
            <div className="affiFormOneInps">
                <div className="documentSection" style={{display: "flex" , flexDirection: "row", justifyContent: "space-between", marginBottom: 40}}>
                    <div className="document"></div>
                    <div className="nextButtonSection" style={{width: "fit-content", margin: "0px", display: "grid", gap: 20, alignContent: "flex-end"}}>
                        <button className="nextButton" style={{backgroundColor: "white", outline: "2px solid #191A1F"}}><span className="buttonIcon ico1"></span>Share</button>
                        <button className="nextButton"><span className="buttonIcon ico2"></span>Edit</button>
                        <button className="nextButton" style={{backgroundColor: "white", outline: "2px solid #191A1F"}}><span className="buttonIcon ico3"></span>Download</button>
                    </div>
                </div>
            </div>
        </div>
    )
}