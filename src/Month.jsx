import React  from 'react';
import './App.css';

export default function(props){
  return (
    <div className="month-container">
    <h1>{props.name}</h1>
     <div id="check-container">
      <input onClick={props.click} checked={props.visited} type="checkbox" name="check"/>
      <label htmlFor="check"><div></div></label>
     </div>
     <button className="btn"><h2>Add A Photo</h2></button>
    </div>
  )
}