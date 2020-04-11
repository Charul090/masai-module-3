import React,{Component} from "react";
import Search from "../Search/Search.jsx";
import CardDisplay from"../CardDisplay/CardDisplay.jsx"
import  "./Body.css"


export default class Body extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        return(
            <main className="container">
                <Search method={this.props.method} statusMethod={this.props.statusMethod}/>
                <CardDisplay data={this.props.data} status={this.props.status} statusMethod={this.props.statusMethod}/>
            </main>
        )
    }
}