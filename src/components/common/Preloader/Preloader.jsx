import React from "react";
import preloader from '../../../assets/images/preloader.svg';

const Preloader = () => {
    return (
        <div style={{backgroundColor: '#f1f2f3'}}>
            <img src={preloader} />
        </div>
    )
}

export default Preloader;