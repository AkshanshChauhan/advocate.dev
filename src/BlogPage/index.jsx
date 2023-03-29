import "./blog.scss";
import { useEffect, useState } from "react";
import img1 from "./img/1.svg";
import img2 from "./img/2.svg";
import img3 from "./img/3.svg";
import img4 from "./img/4.svg";

export default function BlogPage() {
    const [blogData, setBlogData] = useState({});
    const getBlogData = ()=>{
        const requestOptions2 = {
            method: 'GET',
            redirect: 'follow'
        };
          
        fetch("https://api.theonlineattorney.in/api/v1/blog", requestOptions2)
            .then(response => response.json())
            .then((result) => {
                setBlogData(result[window.location.href[window.location.href.length - 1]]);
            })
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        getBlogData();
    }, [])
    
    return (
        <div className="blog-page">
            <div className="inner">
                <div className="main">
                    <div className="left">
                        <div className="inner-main">
                            <div className="blog-heading">{blogData.title}</div>
                            <div className="blog-date-box"><b>{blogData.writen_by}</b> | {blogData.time} | Articles </div>
                            <div className="blog-image" style={{backgroundImage: "url('https://api.theonlineattorney.in" + blogData.img  + "')"}}></div>
                            <div className="blog-text">{blogData.content}</div>
                        </div>
                    </div>
                    <div className="side-links">
                        <div className="link-icon" style={{backgroundImage: "url(" + img1 + ")"}}></div>
                        <div className="link-icon" style={{backgroundImage: "url(" + img2 + ")"}}></div>
                        <div className="link-icon" style={{backgroundImage: "url(" + img3 + ")"}}></div>
                        <div className="link-icon" style={{backgroundImage: "url(" + img4 + ")"}}></div>
                    </div>
                </div>
                <div className="sub-section">
                    <p className="text">Interested in receiving more legal resources?</p>
                    <button className="sub-button">Subscribe to our Blog</button>
                </div>
            </div>
        </div>
    )
}