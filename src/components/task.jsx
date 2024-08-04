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
        <h1 className="mt-2 font-pressStart grid justify-center font-bold text-4xl">
          To Do List
        </h1>
        <div>
          <input
            onChange={onChangeHandle}
            type="text"
            placeholder="Enter Your Text..."
            value={newTask}
            className="font-pressStart h-10 rounded mr-2 inline-block w-700px px-1 py-1 mt-2 border border-black"></input>
          <button
            onClick={addTask}
            className="font-pressStart h-10 bg-green-500 w-[55px] rounded text-white hover:bg-green-800">
            Add
          </button>
        </div>
        <ol className="p-0">
          {tasks.map((task, index) => (
            <li
              className="font-inter font-bold flex items-center justify-between w-[1000px] shadow hover:shadow-lg p-2 mt-2 mb-2 rounded"
              key={index}>
              <span className="text-xl">{task}</span>
              <div className="flex space-x-2">
                <button
                  onClick={() => deleteTask(index)}
                  className="font-pressStart text-2xl h-10 pb-2 bg-red-500 w-[40px] rounded text-white hover:bg-red-800">
                  🗑
                </button>
                <button
                  onClick={() => moveUp(index)}
                  className="font-pressStart text-2xl h-10 pb-2 bg-blue-300 w-[40px] rounded text-white hover:bg-blue-500">
                  ▲
                </button>
                <button
                  onClick={() => moveDown(index)}
                  className="font-pressStart text-2xl h-10 pb-2 bg-blue-300 w-[40px] rounded text-white hover:bg-blue-500">
                  ▼
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
