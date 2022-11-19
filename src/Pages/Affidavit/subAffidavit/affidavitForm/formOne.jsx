import "./affiForm.scss";
import React from "react";
import { useState } from "react";

export default function AffiFormOne(info) {
    const [useStamp, setUseStamp] = useState(false);
    return (
        <div className="affiFormOne">
            <div className="affiFormOneDragAndDrop">
                <div className="affiFormOneDragAndDropInnerLogo"></div>
                <div className="affiFormOneDragAndDropInnerBigText">Drop file here or click to upload</div>
                <div className="affiFormOneDragAndDropInnerSmallText">Supported format pdf</div>
            </div>
            <h1 className="or">or,</h1>
            <button className="affiFormOneBtn">Use Templates</button>
            <div className="affiFormOneInps">
                <label className="label" htmlFor="name">Name</label>
                <input className="inps" name="name" type="text" placeholder="Document name" />
                <label className="label" htmlFor="rfn">Internal Reference Number</label>
                <input className="inps" name="rfn" type="text" placeholder="Internal reference number" />
                <label className="label" htmlFor="da">Details/About</label>
                <textarea style={{resize: "none", height: 100}} className="inps" name="da" type="text" placeholder="Write here..." />
                <input className="toggle" type="checkbox" onClick={(e)=>setUseStamp(e.target.checked)} />
                <select className="inps" disabled={!useStamp}>
                    <option value="">Select Stamp</option>
                </select>
                <div className="nextButtonSection">
                    <button disabled={!useStamp} className="nextButton" onClick={()=>{info.next(2); window.scrollTo(window.top)}}>NEXT</button>
                </div>
            </div>
        </div>
    )
}