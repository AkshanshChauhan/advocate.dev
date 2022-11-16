import "./lawyers.scss";
import React from "react";

function Pref(info) {
    return (
        <div className="prefLinksBox">
            <div className="prefLinks">
                <button className="prefLinkBtn" onClick={()=>info.clickCheck(1)}></button>
                <button className="prefLinkBtn" onClick={()=>info.clickCheck(2)}></button>
                <button className="prefLinkBtn" onClick={()=>info.clickCheck(3)}></button>
                <button className="prefLinkBtn" onClick={()=>info.clickCheck(4)}></button>
                <button className="prefLinkBtn" onClick={()=>info.clickCheck(5)}></button>
                <button className="prefLinkBtn" onClick={()=>info.clickCheck(6)}></button>
                <button className="prefLinkBtn" onClick={()=>info.clickCheck(7)}></button>
                <button className="prefLinkBtn" onClick={()=>info.clickCheck(8)}></button>
            </div>
        </div>
    )
}

export default Pref;