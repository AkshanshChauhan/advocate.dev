import React from "react";

function TopHead(data) {
    return (
        <>
            <p className="heading" style={{color: data.color, letterSpacing: "5px"}}>{data.heading}</p>
            <p className="line"></p>
            <p className="subHeading" style={{color: data.color, width: data.width}}>{data.subHead}</p>
        </>
    )
}

export default TopHead;