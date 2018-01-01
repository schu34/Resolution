import React, { Component } from 'react';
import axios from "axios"
import Month from "./Month"
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = null

    this.createHandler.bind(this);
  }

  componentDidMount(){
    axios.get("/data")
      .then(data=>{
        this.setState(data.data);
        console.log(data)
      })
      .catch(console.log);
  }

  createHandler(name){
    return e=>{
      this.setState(oldState=>{
        const newState = Object.assign({}, oldState);
        newState[name].visited = !newState[name].visited;
        console.log(newState);
        axios.post("/data", this.state);
        return newState;
      })
      console.log(name);
    }
  }

  render() {
    const data = this.state
    return data?     
    (
      <div className="App">
        {Object.keys(data).map((k, i)=>{
          return <Month key={i} name={k} visited ={data[k].visited || null} urls ={data[k].urls||null} click= {this.createHandler(k)}/>
        })}
      </div>
    ) : 
    ("loading...")
  }
}



export default App;
