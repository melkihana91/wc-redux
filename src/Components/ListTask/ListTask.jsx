import React, {useState} from 'react'
import Task from '../Task/Task'
import { useSelector } from 'react-redux'

const ListTask = () => {
const tasks = useSelector((state)=> state.taskReducer.listTodo);
const [showDone, setshowDone]= useState(false);
const [showNotDone, setShowNotDone]= useState(false);
const [list, setList]= useState([]);
const handleShowDone =()=>{
  setShowDone(true)

}
  const handleShowNotDone=()=>{

  }


  return (
    <div className='list'>
    {tasks.map((task)=> <Task task={task}/>)}

    </div>
  )
}

export default ListTask