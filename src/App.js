import { useState } from "react";
import { Task } from "./Task";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };
  const handleClick = () => {
    // const newList = [...todoList, newTask];
    // setTodoList(newList);
    // or simply => setTodoList([...todoList, newTask]);
    const task = {
      id: todoList.length == 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      complete: false,
    };
    setTodoList([...todoList, task]);
  };
  const removeTask = (task) => {
    // setTodoList(todoList.filter((todo) => todo !== task));
    setTodoList(todoList.filter((todo) => todo.id !== task));
  };
  const completeTask = (id) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id == id) {
          return { ...todo, complete: true };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className="addTask">
        <input type="text" onChange={handleChange} />
        <button onClick={handleClick}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((val) => {
          return (
            <Task
              task={val}
              removeTask={removeTask}
              completeTask={completeTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
