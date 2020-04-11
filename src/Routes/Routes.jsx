import React from "react";
import { Route, Switch } from "react-router-dom";
import Body from "../components/Body/Body.jsx"
import JobDescription from "../components/JobDescription/JobDescription.jsx";
import NotFound from "../components/NotFound/NotFound.jsx"

export default function Routes(props){
    let data=props.data
    return (
        <Switch>
            <Route path="/" exact render={()=><Body data={data} method={props.method} statusMethod={props.statusMethod} status={props.status}/>} />
            <Route path="/:id" render={(props)=><JobDescription data={data} {...props} />}/>
            <Route component={NotFound}/>
        </Switch>
    )
}