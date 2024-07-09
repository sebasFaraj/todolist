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
    document.getElementById("textbox").value = "";
  }

  const removeTask = (deletedTask) =>
  {
    const temp = todoList.filter((task) => {
      return task.id !== deletedTask.id;
    })

    setTodoList(temp);
  }

  const editTask = (editedTask, textInput, submitButton) =>
  {
    const temp = todoList.map((task) => {
      if (task.id === editedTask.id)
      {
        task.name = textInput.value;
        return task;
      }
      else
      {
        return task;
      }
    })

    textInput.style.display = "none";
    submitButton.style.display = "none";
    textInput.value = "";

    setTodoList(temp);
  }

  return (
    <div className="App">
      <header className = "header">
        <div className = "textContainer">
          <h1 className = "headerText">ToDo List</h1>
          <h2 className = "subHeaderText">A simple ToDo Application</h2>
        </div>
        <div className = "taskTextbox">
          <input id = "textbox" placeholder = "Enter text here to start" type = "text" onChange = {updateNewTask}></input>
          <button className = "addTask" type = "button" onClick = {addNewTask}>Add Task</button>
        </div>
      </header>
      <main className = "main">
        <div className = "mainList">
          <h1 className = "listHeader">Tasks:</h1>
          {todoList.map((task) => {
           return(
              <ListItem className = "listItem" name = {task.name} id = {task.id} removeTask = {removeTask} editTask = {editTask}/>
            );
         })}
        </div>
        
      </main>
    </div>
  );
}

export default App;
