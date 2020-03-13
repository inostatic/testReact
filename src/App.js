import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Route} from "react-router-dom";
import TableContainer from "./components/Table/TableContainer";


const App = () => {
    return(
        <div className='app-wrapper'>
            <Header/>
            <Route path="/bigdata" render={() => <TableContainer/>}/>
            <Route path="/smalldata" render={() => <TableContainer/>}/>
        </div>
    );
}

export default App;