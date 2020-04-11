import React, { Component } from "react";
import styles from "./CardDisplay.module.css";
import Cards from "../Cards/Cards.jsx";

export default class CardDisplay extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidUpdate() {
        if (this.props.status === true && this.props.data.length !== 0) {
            this.props.statusMethod(false);
        }
    }

    render() {
        let elements = this.props.data.map((elem) => {
            return <Cards data={elem} key={elem.id} id={elem.id} />
        })

        return (
            <div className={styles.display}>
                {
                    elements.length === 0 && this.props.status === true ?
                        <div class="spinner-border" role="status">
                            <span class="sr-only">Loading...</span>
                        </div> :
                        elements
                }
            </div>
        )
    }
}