import "./lawyers.scss";
import React, { useEffect, useState } from "react";

function Pref(info) {
    const [allOps, setAllOps] = useState([]);
    function getAllOps() {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://api.theonlineattorney.in/api/v1/case_area/all", requestOptions)
            .then(response => response.json())
            .then(result => {
                if(result) {
                    setAllOps(result)
                }
            })
            .catch(error => console.log('error', error));
    }
    useEffect(()=>{
        getAllOps();
    }, [])

    const [select, setSelect] = useState(0);
    function ButtonOps(data) {
        return (
            <button className="prefLinkBtn" onClick={()=>{info.clickCheck(data.index); setSelect(data.index)}} style={select===data.index ? {outline: "2px solid #CB7C00"} : {}}></button>
        )
    }

    return (
        <div className="prefLinksBox">
            <div className="prefLinks">
                {allOps.map((e,i)=>{
                    return(
                        <ButtonOps index={i+1}></ButtonOps>
                    )
                })}
            </div>
        </div>
    )
}

export default Pref;