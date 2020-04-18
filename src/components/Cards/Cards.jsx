import React,{Component} from "react";
import styles from "./Cards.module.css";
import {Link} from "react-router-dom"

export default class Card extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let company=this.props.data.company;
        let title=this.props.data.title;
        let type=this.props.data.type;
        let location =this.props.data.location;

        return (
            <div className={styles.display}>
                <div>
                    <p className="text-left">
                        <span className={styles.title}>
                            <Link to={`/${this.props.data.id}`} >
                                {title}
                            </Link>
                        </span>
                        <br></br>
                        <span className={styles.company}>
                            {company}
                        </span>
                        &nbsp; &nbsp; &nbsp;
                        <span className={styles.type}>
                            {type}
                        </span>
                    </p>
                </div>
                <div>
                    <p className={styles.location}>
                        {location}
                    </p>
                </div>
            </div>
        )
    }
}