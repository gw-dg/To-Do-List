import { useState } from "react";
import ToDoList from "./components/task";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ToDoList />
    </>
  );
}

export default App;
