import React,{Component} from "react";
import Search from "../Search/Search.jsx";
import  "./Body.css"


export default class Body extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <main className="container">
                <Search/>
            </main>
        )
    }
}