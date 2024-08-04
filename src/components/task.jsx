import { useState } from "react";
function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTasks] = useState("");

  function onChangeHandle(event) {
    setNewTasks(event.target.value);
  }
  function addTask() {
    if (newTask.trim() !== "") setTasks((t) => [...t, newTask]);
    setNewTasks("");
  }
  function deleteTask(index) {
    const updatedTasks = tasks.filter((ele, i) => i !== index);
    setTasks(updatedTasks);
  }
  function moveUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  function moveDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }
  return (
    <>
      <div className="grid place-items-center">
        <h1 className="grid justify-center font-bold font-size text-2xl">
          To Do List
        </h1>
        <div>
          <input
            onChange={onChangeHandle}
            type="text"
            placeholder="Enter Your Text..."
            value={newTask}
            className="h-10 rounded mr-2 inline-block w-700px px-1 py-1 mt-2 border border-black"></input>
          <button
            onClick={addTask}
            className="h-10 bg-green-800 w-[50px] rounded text-white hover:bg-green-500">
            Add
          </button>
        </div>
        <ol className="p-0">
          {tasks.map((task, index) => (
            <li
              className="flex items-center justify-between bg-slate-200 w-[1000px] p-2 mb-2"
              key={index}>
              <span className="text-xl">{task}</span>
              <div className="flex space-x-2">
                <button
                  onClick={() => deleteTask(index)}
                  className="h-10 bg-red-800 w-[60px] rounded text-white hover:bg-red-500">
                  Delete
                </button>
                <button
                  onClick={() => moveUp(index)}
                  className="h-10 bg-gray-800 w-[60px] rounded text-white hover:bg-gray-500">
                  Up
                </button>
                <button
                  onClick={() => moveDown(index)}
                  className="h-10 bg-gray-800 w-[60px] rounded text-white hover:bg-gray-500">
                  Down
                </button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default ToDoList;
