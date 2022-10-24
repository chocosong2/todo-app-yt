import axios from 'axios'

const baseUrl = "http://localhost:5000"

const getAllToDo = (setToDo) =>{
    axios
    .get(baseUrl)
    .then(({data})=>{
        console.log('data ==> ', data);
        setToDo(data)
        
    })
}
const addToDo = (text,setText,setToDo,date,setDate) => {
    axios
    .post(`${baseUrl}/save`,{text,date})
    .then((data)=>{
        console.log(data);
        setText("")
        setDate("")
        getAllToDo(setToDo,setDate)
    })
    .catch((e)=>console.log(e));
}

const updateToDo = (toDoId,text,setToDo,setText,setIsUpdating,date,setDate) => {
    alert("수정하시겠습니까?")
    axios
    .post(`${baseUrl}/update`,{_id:toDoId,text,date})
    .then((data)=>{
        setText("")
        setDate("")
        setIsUpdating(false)
        getAllToDo(setToDo)
    })
    .catch((e)=>console.log(e));
}

const deleteToDo = (_id,setToDo) => {
    alert("완료하셨나요? (확인 - 삭제)")
    axios
    .post(`${baseUrl}/delete`,{_id})
    .then((data)=>{
        console.log(data);
        
        getAllToDo(setToDo)
    })
    .catch((e)=>console.log(e));
}


export {getAllToDo, addToDo,updateToDo, deleteToDo }