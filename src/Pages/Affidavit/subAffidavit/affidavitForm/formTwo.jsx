import React from "react";
import "./affiForm.scss";
import { useState } from "react";

export default function AffiFormTwo(info) {
    const [esig1, setEsig1] = useState(false);
    const [esig2, setEsig2] = useState(false);
    const [esig3, setEsig3] = useState(false);
    const [esig4, setEsig4] = useState(false);
    return (
        <div className="affiFormOne">
            <p className="esignature">Configure your signature here!</p>
            <div className="affiFormOneInps">
                <label className="label" style={{margin: "0px 0px 40px 0px"}}>Default eSignature Seal</label>
                <div style={{display: "flex", alignItem: "center"}}><input className="toggle" type="checkbox" onChange={()=>{setEsig1(true); setEsig2(false); setEsig3(false); setEsig4(false)}} checked={esig1 ? true : false} /><span style={{fontWeight: 600, color: esig1 ? "black" :"gray"}}>None</span></div>
                <br />
                <div style={{display: "flex", alignItem: "center"}}><input className="toggle" type="checkbox" onChange={()=>{setEsig1(false); setEsig2(true); setEsig3(false); setEsig4(false)}} checked={esig2 ? true : false} /><span style={{fontWeight: 600, color: esig2 ? "black" :"gray"}}>Authorised Signatory Seal</span></div>
                <br />
                <div style={{display: "flex", alignItem: "center"}}><input className="toggle" type="checkbox" onChange={()=>{setEsig1(false); setEsig2(false); setEsig3(true); setEsig4(false)}} checked={esig3 ? true : false} /><span style={{fontWeight: 600, color: esig3 ? "black" :"gray"}}>Director Seal</span></div>
                <br />
                <div style={{display: "flex", alignItem: "center"}}><input className="toggle" type="checkbox" onChange={()=>{setEsig1(false); setEsig2(false); setEsig3(false); setEsig4(true)}} checked={esig4 ? true : false} /><span style={{fontWeight: 600, color: esig4 ? "black" :"gray"}}>Custom Upload</span></div>
                <br /><br />
                <label className="label" htmlFor="on">Organization Name</label>
                <input className="inps" name="on" type="text" placeholder="for 'Company Name'" />
                <div className="nextButtonSection" style={{justifyContent: "left", margin: "0px 0px 40px 0px"}}>
                    <button className="nextButton">Update</button>
                </div>
                <div className="virtualSignatureSection" style={{margin: "20px 40px", marginBottom: 40}}>
                    <p style={{fontSize: "large"}}><b style={{fontWeight: "500"}}>Virtual Signature</b> or <b style={{fontWeight: "500"}}>Adhar eSign</b></p>
                    <div className="nextButtonSection" style={{justifyContent: "left", display: "flex", gap: 20, margin: "0px 0px 40px 0px", padding: "20px 0px"}}>
                        <button className="nextButton">Virtual eSign</button>
                        <button className="nextButton">Adhar eSign</button>
                    </div>
                </div>
                <label className="label" htmlFor="ds">Document Signer</label>
                <input className="inps" name="ds" type="text" placeholder="eSignature" />
                <label className="label" htmlFor="ds">URL</label>
                <input className="inps" name="ds" type="text" placeholder="enter profile access URL" />
                <div className="nextButtonSection" style={{justifyContent: "left", margin: "0px 0px 40px 0px"}}>
                    <button className="nextButton">Setup</button>
                </div>
                <div className="nextButtonSection">
                    <button className="nextButton" onClick={()=>{info.next(3); window.scrollTo(window.top)}}>NEXT</button>
                </div>
            </div>
        </div>
    )
}