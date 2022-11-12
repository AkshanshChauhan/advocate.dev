import "./main.scss";
import React from "react";
import TopHead from "./topHead";
import AffidavitIcon1 from "../Images/affidavit1.svg";
import AffidavitIcon2 from "../Images/affidavit2.svg";
import AffidavitIcon3 from "../Images/affidavit3.svg";
import AffidavitArrow from "../Images/affidavitArrow.svg";

function Affidavit() {
    return (
        <div className="affidavit">
            <TopHead width={"55%"} color={"white"} heading={"AFFIDAVIT"} subHead={"An affidavit is a written statement voluntarily made by an affiant or deponent under an oath or affirmation which is administered by a person who is authorized to do so by law."}/>
            <div className="affidavitProcessBox">
                <div className="affidavitProcess">
                    <div className="affidavitProcessIcon" style={{backgroundImage: "url(" + AffidavitIcon1 + ")"}}></div>
                    <h3>Create</h3>
                </div>
                <div className="affidavitProcessArrow" style={{backgroundImage: "url(" + AffidavitArrow + ")"}}></div>
                <div className="affidavitProcess">
                    <div className="affidavitProcessIcon" style={{backgroundImage: "url(" + AffidavitIcon2 + ")"}}></div>
                    <h3>eSign</h3>
                </div>
                <div className="affidavitProcessArrow" style={{backgroundImage: "url(" + AffidavitArrow + ")"}}></div>
                <div className="affidavitProcess">
                    <div className="affidavitProcessIcon" style={{backgroundImage: "url(" + AffidavitIcon3 + ")"}}></div>
                    <h3>Document</h3>
                </div>
            </div>
            <button className="affidavitButton">Create an Affidavit</button>
        </div>
    )
}

export default Affidavit;