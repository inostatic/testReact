import React from "react";
import styles from './TableHeader.module.css';



const TableHeader = (props) => {
    return (
        <>
            <nav className={styles.pagination}>{props.pages.map((p, key) =>
                <span key={key}
                className={props.currentPage === p ? styles.selectedPage : styles.normalPage}
                onClick={() => { props.setCurrentPageActionCreator(p) }}> {p} </span>)}</nav>
            <span className={styles.th}>
                <div className={styles.sort} onClick={ () => {props.sortActionCreator('id')}} >id {props.tableHeader.id}</div>
                <div className={styles.sort}  onClick={ () => {props.sortActionCreator('firstName')}} >firstName {props.tableHeader.firstName}</div>
                <div className={styles.sort}  onClick={ () => {props.sortActionCreator('lastName')}} >lastName {props.tableHeader.lastName}</div>
                <div className={styles.sort}  onClick={ () => {props.sortActionCreator('email')}} >email {props.tableHeader.email}</div>
                <div className={styles.sort}  onClick={ () => {props.sortActionCreator('phone')}} >phone {props.tableHeader.phone}</div>
            </span>
        </>
    )
}

export default TableHeader;