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

        if(this.props.status === "error"){
            return (
                <div className={styles.display}>
                    <h1 className="text-secondary">Network Error</h1>
                </div>
            )   
        }

        if(this.props.status === "received" && elements.length === 0){
            return (
                <div className={styles.display}>
                    <h1 className="text-secondary">No results found</h1>
                </div>
            )   
        }

        return (
            <div className={styles.display}>
                {
                    elements.length === 0 && this.props.status === true ?
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div> :
                        elements
                }
            </div>
        )
    }
}