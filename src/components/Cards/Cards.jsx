import React,{Component} from "react";
import styles from "./Cards.module.css"

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
                        <span className="h3">
                            {title}
                        </span>
                        <br></br>
                        <span>
                            {company}
                        </span>
                        &nbsp; &nbsp; &nbsp;
                        <span className="small font-italic">
                            {type}
                        </span>
                    </p>
                </div>
                <div>
                    <p className="small text-right">
                        {location}
                    </p>
                </div>
            </div>
        )
    }
}