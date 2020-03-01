import React from 'react';
import './App.css';
import Bigdata from "./components/Table/Bigdata";
import Header from "./components/Header/Header";
import Smalldata from "./components/Table/Smalldata";
import {BrowserRouter, Route} from 'react-router-dom';

const App = (props) => {
    return(
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Route path="/bigdata" render={ () => <Bigdata stringData={props.stringData} /> } />
                <Route path="/smalldata" render={ () => <Smalldata stringData={props.stringData} /> } />
            </div>
        </BrowserRouter>
    );
}

export default App;

