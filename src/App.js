import logo from './logo.svg';
import './App.css';
import AddTask from './Components/AddTask/AddTask';
import ListTask from './Components/ListTask/ListTask';
import taskReducer from './redux/reducers/TaskReducer';

function App() {



  return (
    <div className="App">
      < AddTask  />
      < ListTask />
    </div>
  );
}

export default App;
