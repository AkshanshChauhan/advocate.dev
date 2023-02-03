import React from 'react';
import Background from '../../../Main/background';

const trHistory = [
    {name: "Jacon"},
    {name: "Rahul"},
    {name: "Manoj"},
    {name: "Comping"},
    {name: "Losting"}
]

const Card = (info)=> {
    return(
        <div className='longCard'>
            {info.name}
        </div>
    )
}

export default function Payment(info) {
  return (
    <>
        <Background backgroundImage={info.backgroundImage} height={info.height} top={info.top} />
        <div className="payment">
            <div className="payment-left">
                <h1>Transaction History</h1>
                {trHistory.map((data)=><Card name={data.name} /> )}
            </div>
            <div className="payment-right"></div>
        </div>
    </>
  )
}