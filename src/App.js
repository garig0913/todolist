import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { BsCheck } from "react-icons/bs";
import Input from "./Components/Input/Input";
import Menu from "./Components/Menu/Menu";
import Tasks from "./Components/Tasks/Tasks";
import CompletedTasks from "./Components/Tasks/CompletedTasks";
import UncompleteTasks from "./Components/Tasks/UncompleteTasks";

function App() {
   const [task, setTask] = useState("");
   const [taskList, setTaskList] = useState([]);
   const [atsonh, setAtsonh] = useState(true);
   const [btsonh, setBtsonh] = useState(false);
   const [ctsonh, setCtsonh] = useState(false);

   const taskHandler = () => {
      setTaskList([
         ...taskList,
         {
            taskName: task,
            id: +Math.random().toString().split(".")[1],
            completed: false,
         },
      ]);
   };

   const deleteHandler = (id) => {
      setTaskList(taskList.filter((el) => el.id !== id));
   };

   const statusHandler = (id) => {
      const taskIndex = taskList.findIndex((el) => el.id === id);
      const updatedTaskList = [...taskList];
      updatedTaskList[taskIndex].completed = !updatedTaskList[taskIndex].completed;
      setTaskList(updatedTaskList);
   };

   const openA = () => {
      setAtsonh(true);
      setBtsonh(false);
      setCtsonh(false);
   };

   const openB = () => {
      setAtsonh(false);
      setBtsonh(true);
      setCtsonh(false);
   };

   const openC = () => {
      setAtsonh(false);
      setBtsonh(false);
      setCtsonh(true);
   };

   return (
      <>
         {/* Input */}
         <Input setTask={(e) => setTask(e.target.value)} taskHandler={taskHandler} />
         {/* Input */}

         <div className="w-3/5 mx-auto">
            <Menu
               atsonh={atsonh}
               btson={btsonh}
               ctsonh={ctsonh}
               openA={openA}
               openB={openB}
               openC={openC}
            />

            {atsonh && (
               <Tasks
                  taskList={taskList}
                  status={statusHandler}
                  delete={deleteHandler}
                  BsCheck={<BsCheck />}
                  FaTimes={<FaTimes />}
               />
            )}

            {btsonh && (
               <CompletedTasks
                  taskList={taskList}
                  status={statusHandler}
                  delete={deleteHandler}
                  BsCheck={<BsCheck />}
                  FaTimes={<FaTimes />}
               />
            )}

            {ctsonh && (
               <UncompleteTasks
                  taskList={taskList}
                  status={statusHandler}
                  delete={deleteHandler}
                  BsCheck={<BsCheck />}
                  FaTimes={<FaTimes />}
               />
            )}
         </div>
      </>
   );
}

export default App;
