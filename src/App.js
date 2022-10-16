import Button from "./compenents/Button";
import Header from "./compenents/Header";
import PersonCard from "./compenents/PersonCard";
import React, { useState } from "react";
import './App.css';


function App() {
  const [count,SetCount]=useState(0)
  const clickEnter =(hafsa)=>{
    if(hafsa==="next"){
      if(count>=0 && count<11){
        SetCount(count+5)
      }
      else if(count>=15){
        SetCount(0)
      }
    }
    else{
      if(count>=0){
        SetCount(count-5)
      }
      if(count<=0){
        SetCount(15)
      }
      console.log(count)
    }
  }
  return (
    <div className="allmain">
      
        <Header count= {count} />

        <PersonCard count= {count}/>
        
        <Button clickFunc ={clickEnter}/>
    
      
    </div>
  );
}

export default App;
