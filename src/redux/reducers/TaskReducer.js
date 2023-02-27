
import { v4 as uuidv4 } from 'uuid';

import { ADD_TASK, TOGGLE_IS_DONE, TOGGLE_DONE ,EDITE_TASK} from '../constanants/action-types';
import { addTask, toggleIsDone, toggleDone , editeTask} from '../actions/action';

const initialState = {
 listTodo:[{id:uuidv4(), description:" I want to visit canada", isDone: false},
  {id:uuidv4(), description:" I want to read book", isDone:true},
  {id:uuidv4(), description:" I want to visit paris", isDone: false},
  {id:uuidv4(), description:" I want to watch tv ", isDone: false},
  {id:uuidv4(), description:" I want to watch tv ", isDone: false},]
}






function taskReducer(state=initialState, action ){
    const {type, payload}= action;
    switch (type) {
     case ADD_TASK:return{ listTodo: [...state.listTodo ,{ id:uuidv4(), description:"", isDone: false}  ]};
     case TOGGLE_IS_DONE: return{listTodo: state.listTodo.map((task)=>
      task.id === payload ? {...task, isDone: !task.isDone }: task),};

      case TOGGLE_DONE: return{listTodo: state.listTodo.map((task)=>
        task.id === payload ? {...task, isDone: false }: task),

     } ;
     case EDITE_TASK:
      return{
        listTodo: state.listTodo.map((task)=>
        task.id === payload.id ? { ...task, description : payload.edited } : task ),
      
      };
    
        default:
          return state ;
    }
}



export default taskReducer