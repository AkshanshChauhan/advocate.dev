import React from 'react';
import Background from '../../../Main/background';
import "./payment.scss";

import img1 from "./img/debit.svg";
import img2 from "./img/upi.svg";
import img3 from "./img/net.svg";

const trHistory = [
    {name: "Jacon"},
    {name: "Rahul"},
    {name: "Manoj"},
    {name: "Comping"},
    {name: "Losting"}
]

const Card = (info)=> {
    return(
        <div className='long-card'>
            {info.name}
            <div className="amount">
                <p>Amount</p>
                <h2 className="price">₹100.00</h2>
            </div>
        </div>
    )
}

export default function Payment(info) {
  return (
    <>
        <Background backgroundImage={info.backgroundImage} height={info.height} top={info.top} />
        <div className="payment">
            <div className="payment-left">
                <h1 className="payment-heading">Payment Method</h1>
                <p className="payment-sub-heading">CREDIT AND DEBIT CARDS</p>
                <div className="pm-box">
                    <p className="title">Indian Overseas Bank Debit Card</p>
                    <p className="star-num">****9283</p>
                    <p className="small-name">Rahul David</p>
                    <p className="small-expire">Expires 12/2026</p>
                </div>
                <div className="flat-card">
                    <div className="icon" style={{backgroundImage: "url(" + img1 + ")"}}></div>
                    <div className="title">Credit / Debit Cards</div>
                </div>
                <div className="flat-card">
                    <div className="icon" style={{backgroundImage: "url(" + img2 + ")"}}></div>
                    <div className="title">UPI Payments</div>
                </div>
                <div className="flat-card">
                    <div className="icon" style={{backgroundImage: "url(" + img3 + ")"}}></div>
                    <div className="title">Net Banking</div>
                </div>
            </div>
            <div className="payment-right">
                <h1>Transaction History</h1>
                {trHistory.map((data)=><Card name={data.name} /> )}
            </div>
        </div>
    </>
  )
}