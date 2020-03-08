import React from "react";
import '../Table.css';

const TableHeader = (props) => {

    return (
        <div className="tr">
            <span className="sort" onClick={ () => {props.sorting('id')}} >id ▼</span>
            <span className="sort" onClick={ () => {props.sorting('firstName')}} >firstName ▼</span>
            <span className="sort" onClick={ () => {props.sorting('lastName')}} >lastName ▼</span>
            <span className="sort" onClick={ () => {props.sorting('email')}} >email ▼</span>
            <span className="sort" onClick={ () => {props.sorting('phone')}} >phone ▼</span>
        </div>
    )
}

export default TableHeader;