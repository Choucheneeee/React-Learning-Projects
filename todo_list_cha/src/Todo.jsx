import React, { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [Time, setTime] = useState("");
  const [IsDone, setIsDone] = useState();
  const [Priority, setPriprity] = useState("None");
  const [tasks, setTasks] = useState([]);
  function handleAddTask() {
    const newTask = {
      Task: task,
      Time: Time,
      IsDone: IsDone,
      priority: Priority,
    };
    console.log(newTask);
    setTasks((t) => [...t, newTask]);
    setTime("");
    setTask("");
    setIsDone(false);
    setPriprity("None");
  }
  function handleChangeTask(event) {
    setTask(event.target.value);
  }
  function handleChangeTime(event) {
    setTime(event.target.value);
  }
  function handleChangeisdone(event) {
    setIsDone(event.target.value === "Done");
  }
  function handleChangepriority(event) {
    setPriprity(event.target.value);
  }
  return (
    <div  className="container">
      <div>
        <h2 className="h2">This your List</h2>
        <table>
          <thead >
            <tr >
              <th style={{ borderBottom: '5px solid black' }} scope="col">Task</th>
              <th style={{ borderBottom: '5px solid black' }} scope="col">Time</th>
              <th style={{ borderBottom: '5px solid black' }} scope="col">Priority</th>
            </tr>
          </thead>
          {tasks.map((ta, index) => (
  <tr key={index} className={ta.IsDone ? "done" : "still"}>
    <th style={{ borderBottom: '1px solid black' }}>{ta.Task}</th>
    <td style={{ borderBottom: '1px solid black' }}>{ta.Time}</td>
    <td style={{ borderBottom: '1px solid black' }}>{ta.priority}</td>
  </tr>
))}

        </table>
        <br/>
      </div>
      <br/>
      <div>
      <br/>
        
        <div>
          <div>
          <input className="c-checkbox" type="checkbox" id="checkbox"/>
<div class="c-formContainer">
  <form  action="">
    <input className="c-form__input" onChange={handleChangeTask} placeholder="Task" type="text" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" required/>
    <label class="c-form__buttonLabel" for="checkbox">
     
    </label>
    <label  class="c-form__toggle" for="checkbox" data-title="Add Task"></label>
    <br />
  </form>
</div>
          </div>
          <br />
        </div>
        <br />
        <div>
          <label>Time : </label>
          <input
            type="time"
            value={Time}
            id="time"
            onChange={handleChangeTime}
            placeholder="Type a Task ..."
          />
        </div>
        <br />
        <div>
          <label>Status : </label>
          <input
            type="radio"
            name="status"
            onChange={handleChangeisdone}
            id="isdone"
            value="Done"
          />
          Done
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="radio"
            name="status"
            onChange={handleChangeisdone}
            id="isdone"
            value="Still"
          />
          Still
          <br />
          <label>Priority</label>
          <input
            type="checkbox"
            name="Priority"
            onChange={handleChangepriority}
            checked={Priority === "High priority"}
            value="High priority"
          />
          High priority
          <input
            type="checkbox"
            name="Priority"
            onChange={handleChangepriority}
            checked={Priority === "Middle priority"}
            value="Middle priority"
          />
          Middle priority
          <input
            type="checkbox"
            name="Priority"
            onChange={handleChangepriority}
            checked={Priority === "Low priority"}
            value="Low priority"
          />
          Low priority
        </div>
        <br/>
        <button onClick={handleAddTask} class="button-82-pushable" role="button">
  <span class="button-82-shadow"></span>
  <span class="button-82-edge"></span>
  <span class="button-82-front text">
    Add Task
    <br />

  </span>
  <br />

</button>
      </div>
    </div>
  );
}

export default Todo;
