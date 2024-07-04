import './App.css';
import { ListItem } from './ListItem';
import { useState } from "react";

function App() {

  const [newTask, setNewTask] = useState("");
  const [todoList, setTodoList] = useState([]);

  const updateNewTask = (event) =>
  {
    setNewTask(event.target.value);
  }

  const addNewTask = () =>
  {
    let temp = {
      id: (todoList.length === 0) ? 1 : todoList[todoList.length - 1].id + 1,
      name: newTask, 
    };
    setTodoList([...todoList,temp]);
    document.getElementById("textbox").innerHtml = "";
  }

  const removeTask = (deletedTask) =>
  {
    const temp = todoList.filter((task) => {
      return task.id !== deletedTask.id;
    })

    setTodoList(temp);
  }

  return (
    <div className="App">
      <header className = "header">
        <input id = "textbox" type = "text" onChange = {updateNewTask}></input>
        <button type = "button" onClick = {addNewTask}>Add Task</button>
      </header>
      <main className = "ToDoList">
        {todoList.map((task) => {
          return(
            <ListItem name = {task.name} id = {task.id} removeTask = {removeTask}/>
          );
        })}
      </main>
    </div>
  );
}

export default App;
