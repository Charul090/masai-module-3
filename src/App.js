import React from 'react';
import './App.css';
import Body from "./components/Body/Body.jsx";
import Header from "./components/Header/Header.jsx"

class App extends React.Component{
  constructor(props){
    super(props);

    this.state={
      data:[],
      status:false
    }
  }

  setData=(input)=>{
    this.setState({data:input})
  }

  setStatus=(input)=>{
    this.setState({status:input})
  }

  render(){
    
    return (
      <div className="App">
        <Header />
        <Body data={this.state.data} method={this.setData} status={this.state.status} statusMethod={this.setStatus}/>
      </div>
    );
  }
}

export default App;
