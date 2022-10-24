import React from 'react'
import {BiEdit}  from 'react-icons/bi'
import {AiOutlineCheck} from 'react-icons/ai'



export const ToDo = ({text,updateMode,deleteToDo,date}) => {



    return (
    <div id='di' className='todo text'>
        <input type="checkbox" />
        <div  id='text' className='text'>{text}</div>
        <div>{date}까지</div>
        <div className='icons'>
            <BiEdit className='icon' onClick={updateMode}/>
            <AiOutlineCheck className='icon' onClick={deleteToDo}/>
        </div>
    </div>
  )
}

export default ToDo