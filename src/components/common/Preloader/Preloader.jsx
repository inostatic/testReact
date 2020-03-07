import React from "react";
import preloader from '../../../assets/images/preloader.svg';
import './preloader.css';
const Preloader = () => {
    return (
        <div className="preload" style={{backgroundColor: '#f1f2f3'}}>
            <img src={preloader} />
        </div>
    )
}

export default Preloader;