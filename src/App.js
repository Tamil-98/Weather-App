import React from "react";

import { useState} from 'react';


function App() {

// function submithandler(e){
  
//   const output=e.target.value
//   setName(output)
//   console.log(output)
// }
const favcolor =['red','Black','Blue','purple']
const present = 1;
const status = present ? <p>Present</p> : <p>Absent</p>
const [userName, setuserName] = useState("")
const[displayText,setdisplayText]=useState("")

function handlechange(e){
  setuserName(e.target.value)
  console.log(userName)
}

function handlesubmit(){
  setdisplayText(userName)
  
}

  return (
    <>
      <h1>Let us see React Props</h1>
      <ul>
        {favcolor.map((ele,index)=>(<li key={index}>{ele}</li>))}
      </ul>
      <h3>{status}</h3>
      <input type="text" onChange={handlechange} value={userName}></input>
      <button onClick={handlesubmit}>Submit</button>
      <h3>Hai, {displayText}</h3>
    </>

  );
  
}


export default App;
