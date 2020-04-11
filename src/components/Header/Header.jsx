import React, { Component } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header className={styles.header}>
                <div className={styles.logo}>
                    <img src="/logo.png" alt="Logo" />
                </div>
                <div className={styles.title}>
                    <h2>jobSs..</h2>
                </div>
                <div className={styles.links}>
                    <div className={styles.link}>
                        <Link to="/" exact>
                            Home
                        </Link>
                    </div>
                </div>
            </header>
        )
    }
}