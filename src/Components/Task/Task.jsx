import React, {useState } from 'react';
import {Button, Modal} from 'react-bootstrap';
import "./Task.css";
import { useDispatch } from 'react-redux';
import { toggleIsDone, toggleDone, editeTask } from '../../redux/actions/action';
const Task = ({taskdelails, key}) => {
  
  
  const dispatch = useDispatch();
  const [ show, setshow] = useState(false);
  const handleClose=()=>setshow(false);
  const handleShow=()=>setshow(true);
  const [ edited, setEdited]=useState("");
  const handleIsDone=()=>{
    dispatch(toggleIsDone(taskdelails.id));

  }
  const handleDone=()=>{
    dispatch(toggleDone(taskdelails.id));

  }



  const handleSave=()=>{
    dispatch(editeTask({edited, id:taskdelails.id}))
 
}
const handleChange=(e)=>{
  setEdited(e.target.value)

}
  return (

    <div className='Task'>
      <h3>{taskdelails.descriptio}</h3> {taskdelails.isDone ? ( 
      
      <Button variant="outline-danger"onClik={handleDone}>undo</Button>):
       ( <Button variant="outline-success" onClick={handleIsDone}>done</Button>)
                                                       }
          <Button variant="outline-warning"onClick={handleShow}>Edit</Button>  
          <Modal show={show} onHide={handleClose} className="handel-container"
          centered>
     
    
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <input type="task" placeholder='Edit task'  defaultValue={taskdelails.description} onChange={handleChange}/>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary"onClick={handleSave}>Save changes</Button>
        </Modal.Footer>
                      </Modal>                  
      
    
    
    
    
    
    
    </div>
  )
}


export default Task;
