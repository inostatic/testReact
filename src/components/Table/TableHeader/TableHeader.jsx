import React from "react";
import './TableHeader.css';
// import '../../../App.css';
const TableHeader = (props) => {
    return (
        <span className="th">
            <div className="sort" onClick={ () => {props.sorting('id')}} >id {props.tableHeader.id}</div>
            <div className="sort" onClick={ () => {props.sorting('firstName')}} >firstName {props.tableHeader.firstName}</div>
            <div className="sort" onClick={ () => {props.sorting('lastName')}} >lastName {props.tableHeader.lastName}</div>
            <div className="sort" onClick={ () => {props.sorting('email')}} >email {props.tableHeader.email}</div>
            <div className="sort" onClick={ () => {props.sorting('phone')}} >phone {props.tableHeader.phone}</div>
        </span>
    )
}

export default TableHeader;