import React, { useEffect, useRef, useState } from "react";
import "./chat.scss";

const message = [];
export default function Chat() {
    const [allData, setAllData] = useState();
    const [chatTime, setChatTime] = useState();
    const [chatStarted, setChatStarted] = useState(false);
    const [msg, setMsg] = useState();
    const [msgs, setMsgs] = useState([]);

    const socket = useRef(null);

    function getCons() {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://api.theonlineattorney.in/api/v1/consult/3", requestOptions)
            .then(response => response.json())
            .then(result => setAllData(result))
            .catch(error => console.log('error', error));
    }

    useEffect(()=>{
        getCons(); 
    }, [])
    
    useEffect(()=>{
        setTimeout(()=>{
            socket.current = new WebSocket(`wss://api.theonlineattorney.in/chat/?agent=${allData.agent}&thread=${allData.thread_id}&token=` + localStorage.getItem("token"));
            socket.current.addEventListener("message", (d)=>{
                setChatTime(JSON.parse(d.data));
            })
            socket.current.addEventListener("open", ()=>{
                setTimeout(()=>setChatStarted(true), 1000);               
            })
            socket.current.addEventListener("close", ()=>{
                setChatStarted(false);
            })
        }, 1000)
        console.log(allData);
    }, [allData]);

    const sendMessage = ()=> {
        socket.current.send(`{"userMsg": "${msg}"}`);
        message.push(msg);
        setMsgs(message);
    }

    return (
        <>
        { chatStarted===true ?
            <div className="chat">
                <div className="nav">
                    <div className="left-section">
                        <div className="back-icon"></div>
                        <div className="person-icon"></div>
                        <div className="person-name">{allData.agent} | time: {chatTime.text}</div>
                    </div>
                    <div className="right-section">
                        <div className="upper-ar">
                            <div className="fade">Additional Services <span className="not-fade">| Legal Notice</span></div>
                        </div>
                        <div className="lower-ar">
                            ₹ 50
                        </div>
                    </div>
                </div>
                <div className="chatting-section">
                    {
                        msgs.map((e, key)=>{
                            return (
                                <p className="message" key={key}>{e}</p>
                            )
                        })
                    }
                </div>
                <div className="messaging-section">
                    <div className="clip-icon"></div>
                    <input type="text" placeholder="Type something..." suggestion="false" onChange={(e)=>setMsg(e.target.value)}/>
                    <div className="send-icon" onClick={()=>sendMessage()}></div>
                </div>
            </div> : null 
        }
        </>
    )
}