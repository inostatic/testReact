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
                <Route path="/bigdata" render={ () => <Bigdata bigData={props.state.bigData} newTextInput={props.state.newTextInput} addPost={props.addPost} updateInputText={props.updateInputText} /> } />
                <Route path="/smalldata" render={ () => <Smalldata smallData={props.state.smallData} newTextInput={props.state.newTextInput} addPost={props.addPost} updateInputText={props.updateInputText} /> } />
            </div>
        </BrowserRouter>
    );
}

export default App;

