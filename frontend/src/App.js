import { useEffect, useState } from "react";
import Calendar from "./components/Calendar";
import ToDo from "./components/ToDo";
import { addToDo, getAllToDo, updateToDo , deleteToDo} from "./utils/HandleApi.js";

function App() {

  const [toDo,setToDo] = useState([])
  const [text,setText] = useState("")
  const [isUpdating,setIsUpdating] = useState(false)
  const [toDoId,setToDoId] = useState("")
  const [date,setDate] = useState("")

  
  useEffect(()=>{
    getAllToDo(setToDo,setDate)
  },[])

  const updateMode = (_id,text) =>{
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
  }


  return (
    <div className="App">
      <div className="container">
        <h3>투두리스트</h3>
        <Calendar/>
        <div className="top">

          <input
          value={text}
          onChange={(e)=>setText(e.target.value)}
           type="text" 
           placeholder="할일과 기한 날짜를 입력하세요"
           required/>
        
           <input 
           value={date}
           onChange={(e)=>setDate(e.target.value)}
           type="date"
           required/>
          
          <div className="add" onClick={
            isUpdating ? 
            () =>updateToDo(toDoId,text,setToDo,setText,setIsUpdating,date,setDate)
            :
            ()=>addToDo(text,setText,setToDo,date,setDate)}>
            {isUpdating ? "Update" : "Add"} 
          </div>
        </div>

        <div className="list">
          
          {toDo.map((item)=><ToDo 
          key={item._id} 
          text={item.text}
          date={item.date}
          updateMode = {()=>updateMode(item._id,item.text)}
          deleteToDo  = {()=>deleteToDo(item._id,setToDo)}/>)}
          
        </div>
      </div>
    </div>
  );
}

export default App;
