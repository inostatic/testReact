import React from "react";
import styles from './TableHeader.module.css';


const TableHeader = (props) => {
    return (
        <>
            <nav className={styles.pagination}>{props.pages.map((p, key) =>
                <span key={key}
                className={props.currentPage === p ? styles.selectedPage : styles.normalPage}
                onClick={() => { props.setCurrentPage(p) }}> {p} </span>)}</nav>
            <span className={styles.th}>
                <div className={styles.sort} onClick={ () => {props.sorting('id')}} >id {props.tableHeader.id}</div>
                <div className={styles.sort}  onClick={ () => {props.sorting('firstName')}} >firstName {props.tableHeader.firstName}</div>
                <div className={styles.sort}  onClick={ () => {props.sorting('lastName')}} >lastName {props.tableHeader.lastName}</div>
                <div className={styles.sort}  onClick={ () => {props.sorting('email')}} >email {props.tableHeader.email}</div>
                <div className={styles.sort}  onClick={ () => {props.sorting('phone')}} >phone {props.tableHeader.phone}</div>
            </span>
        </>
    )
}

export default TableHeader;