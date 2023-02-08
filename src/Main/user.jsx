import "./main.scss";
import React, { useEffect, useState } from "react";

export default function User() {
    const [data, setId] = useState([]);
    const getIdData = ()=> {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`https://api.theonlineattorney.in/api/v1/profile/${window.location.href.split("/")[window.location.href.split("/").length-1]}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                if(result !== null && result !== undefined) {
                    setId(result);
                }
            })
            .catch(error => console.log('error', error));
    }
    useEffect(()=>{
        getIdData();
    },[]);
    return(
        <div className="userInformation">
            <div>
                <p><b>Name:</b> {data.first_name + " " + data.last_name}</p>
                <p><b>Location:</b> {data.city}</p>
                <p><b>Mobile:</b> {data.mobile}</p>
                <p><b>Id:</b> {data.id}</p>
            </div>
        </div>
    )
}