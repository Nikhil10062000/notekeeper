import React,{useState}from "react";
import Pin from "./Pin/Pin";
import Input from "./Notes/Input";

import Notes from "./Notes/Notes";

const Main = () => {
  const [notes , setNotes]= useState([])
  const [ pin , setPin] = useState([])
  const insert =(state)=>{
     setNotes((res)=>{
      return [...res , state]
     })
  }
  const [get , set] = useState(true)
  
  return (
    <div className="none">
      
      <Input insert={insert}/>
      <Pin pin={pin} get={get}/>
      
      <Notes  notes={notes} setNotes={setNotes} set={set} setPin={setPin}/>
    </div>
  );
};

export default Main;
