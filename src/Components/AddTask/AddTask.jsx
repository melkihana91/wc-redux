import React ,{useState}from 'react';
import {Button} from 'react-bootstrap';
import"./AddTask.css";
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/actions/action';
const AddTask = () => {


const dispatch = useDispatch()
const [ newTask, setNewTask]=useState ("")
const handleChange=(e)=>{
  setNewTask(e.target.value)

}
const handleSubmit=()=>{
dispatch(addTask(newTask))
setNewTask("")
}

  return (
    <div  className='Add'  >
      <h1> List To Do </h1>
      
      <div className='inpt'>
       
      < input type="text"  placeholder=" Enter the task you want to Add" onChange={handleChange} value={newTask} />
      
      <Button variant="secondary" onClick={handleSubmit}> Add Task</Button>
      
     
       
       
       </div>
    </div>
  )
}

export default AddTask
