import React from "react";
import preloader from '../../../assets/images/preloader.svg';
import './preloader.css';

const Preloader = () => {
    return (
        <span className="preload">
            <img src={preloader}/>
        </span>
    )
}

export default Preloader;