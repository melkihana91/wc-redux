
import{ADD_TASK, TOGGLE_IS_DONE, TOGGLE_DONE, EDITE_TASK }from "../constanants/action-types"






export  const  addTask= (payload)=>{
    return{
    type:ADD_TASK ,
    payload,
    }
    
    }


    export  const toggleIsDone= (payload)=>{
        return{
        type: TOGGLE_IS_DONE ,
        payload,
        }
        
        }
        export  const toggleDone= (payload)=>{
            return{
            type:TOGGLE_DONE ,
            payload,
            }
            
            }
            export  const editeTask= (payload)=>{
                return{
                type: EDITE_TASK ,
                payload,
                }
                
                }

