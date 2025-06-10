
 import { useState } from "react";
import appstyle from "./App.module.css"
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";
// import "./App.module.css"
 function App() {
 const  [calVal,setCalVal]=useState("45");
 const  onButtonClick=(btnName)=>{
  if (btnName === 'C') {
    setCalVal("")
  } else if(btnName === '='){
    const result =eval(calVal)
    setCalVal(result)

  }else {
    const newDisplauValue=calVal+btnName
    setCalVal(newDisplauValue)
  }
}

  return (
   <center>
    <div className={appstyle.calculator}>
      <Display displayVal={calVal}></Display>

       <ButtonsContainer onButtonClick={ onButtonClick}/>      
  
     </div>
     </center>
  )
}export default App;
