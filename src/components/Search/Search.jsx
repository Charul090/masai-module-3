import React, { Component } from "react";
import axios from "axios"

export default class Search extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            description: "",
            location: "",
            checked:true
        }
    }

    handleInput = (e) => {
        let name = e.target.name;
        let x=this.state

        if(name === "checked"){
            let {checked}=x;
            this.setState({ [name]:!checked });
        }
        
        else{
            let x = e.target.value;
            this.setState({ [name]: x });
        }

    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.statusMethod(true);

        let description=this.state.description;
        let location=this.state.location;
        let fulltime=this.state.checked;
        let obj={}
        if(description === "" && location === ""){
            obj["search"]="node";
        }
        else{
            obj["description"]=description;
            obj["location"]=location;
            obj["fulltime"]=fulltime;
        }

        axios({
            method:"get",
            url:"https://jobs.github.com/positions.json",
            params:obj
        }).then((res)=>res.data)
        .then((data)=>{
            this.props.method(data)
        })
        
    }

    render() {

        return (
            <div className="row">
                <div className="col-12">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-row mb-3">
                            <div className="col-6">
                                <input type="text" name="description" value={this.state.description}
                                    className="form-control" onChange={this.handleInput}
                                    placeholder="description,title,companies..." />
                            </div>

                            <div className="col-6">
                                <input type="text" name="location" value={this.state.location}
                                    className="form-control" onChange={this.handleInput}
                                    placeholder="location..." />
                            </div>
                            <div className="col-2 form-check form-check-inline">
                                <input type="checkbox" name="checked" className="form-check-input" 
                                    onChange={this.handleInput} checked={this.state.checked} />
                                <label className="form-check-label">Full-Time</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-dark btn-block btn-sm"
                                type="submit">SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}