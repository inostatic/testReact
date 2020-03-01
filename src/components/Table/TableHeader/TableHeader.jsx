import React from "react";
import '../Table.css';

const TableHeader = () => {
    return (
        <div className="tr">
            <span className="sort" >id </span>
            <span className="sort" >firstName </span>
            <span className="sort" >lastName </span>
            <span className="sort" >email </span>
            <span className="sort" >phone </span>
        </div>
    )
}

export default TableHeader;