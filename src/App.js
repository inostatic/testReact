import React from 'react';
import './App.css';
import Bigdata from "./components/Table/Bigdata";
import Header from "./components/Header/Header";
import Smalldata from "./components/Table/Smalldata";
import {Route} from "react-router-dom";



const App = (props) => {
    return(
            <div className='app-wrapper'>
                <Header/>
                <Route path="/bigdata" render={ () => <Bigdata /> } />
                <Route path="/smalldata" render={ () => <Smalldata /> } />
            </div>

    );
}

export default App;