import React from "react";
import '../Table.css';

const TableHeader = (props) => {
    debugger;
    return (
        <div className="tr">
            <span className="sort" onClick={ () => {props.sorting('id')}} >id {props.tableHeader.id}</span>
            <span className="sort" onClick={ () => {props.sorting('firstName')}} >firstName {props.tableHeader.firstName}</span>
            <span className="sort" onClick={ () => {props.sorting('lastName')}} >lastName {props.tableHeader.lastName}</span>
            <span className="sort" onClick={ () => {props.sorting('email')}} >email {props.tableHeader.email}</span>
            <span className="sort" onClick={ () => {props.sorting('phone')}} >phone {props.tableHeader.phone}</span>
        </div>
    )
}

export default TableHeader;