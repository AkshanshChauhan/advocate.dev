import React from "react";

function Trouble() {
    return (
        <div className="troubleSection">
            <div>
                <h1 className="heading" style={{fontSize: "40px", fontWeight: 500}}>I’M IN TROUBLE, WHAT SHOULD I DO NOW?</h1>
                <div className="line"></div>
                <p className="subHeading">Let us take the stress out of your legal process. Our team is here to help you.</p>
            </div>
            <div className="troubleSectionSteps">
                <fieldset className="troubleSectionStep" style={{border: "4px solid black"}}>
                    <legend style={{fontSize: "100px", fontWeight: "600"}}>1</legend>
                    <h3>Analysis/Strategize</h3>
                    <p>We will review your charges, the evidence against you, provide you with a legal opinion and develop a step-by-step plan for the best outcome</p>
                </fieldset>
                <fieldset className="troubleSectionStep" style={{border: "4px solid black"}}>
                    <legend style={{fontSize: "100px", fontWeight: "600"}}>2</legend>
                    <h3>Negotiate</h3>
                    <p>Our goal is to avoid a criminal record or worse, jail. We start by negotiating with the Crown by finding the problems with the investigation, having you take personal steps, and obtaining a background of your good character.</p>
                </fieldset>
                <fieldset className="troubleSectionStep" style={{border: "4px solid black"}}>
                    <legend style={{fontSize: "100px", fontWeight: "600"}}>3</legend>
                    <h3>Trail</h3>
                    <p>If the charges will not be withdrawn or resolved favourably to you then we will exhaustively and meticulously prepare against the witnesses and prepare you fully for trial. Our lawyers have extensive trial experience and will use all tools available to us: experts, witnesses, Charter applications etc. to provide you with a skilful/vigorous/compelling and effective defence.</p>
                </fieldset>
            </div>
        </div>
    )
}

export default Trouble;