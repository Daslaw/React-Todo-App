import React, { useState } from "react";
import { nanoid } from "nanoid";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";

function App(props) {

  

  const [tasks, setTasks] = useState(props.tasks);
  
  
  function addTask(name) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };

    setTasks([...tasks, newTask]);
  }
  


  const taskList = tasks.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
    />
  ));
  

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form  addTask={addTask}/>
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
