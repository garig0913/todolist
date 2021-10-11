const UncompleteTasks = (props) => {
   return (
      <ul className="w-full flex flex-col gap-4 my-5">
         {props.taskList
            .filter((list) => !list.completed)
            .map((list) => (
               <li
                  key={`task_${list.id}`}
                  className="flex hover:bg-gray-200 py-2 px-4 rounded-xl justify-between items-center"
               >
                  <p className={`font-bold text-gray-600 ${list.completed ? "line-through" : ""}`}>
                     {list.taskName}
                  </p>
                  <div className="flex items-center gap-2">
                     <button
                        onClick={() => props.status(list.id)}
                        className={`w-6 h-6 rounded-full flex items-center text-base bg-opacity-50 border-2 hover:bg-opacity-1 justify-center ${
                           list.completed
                              ? "text-green-400 border-green-400 bg-green-400"
                              : "text-gray-400 border-gray-400 bg-gray-400"
                        }`}
                     >
                        {props.BsCheck}
                     </button>
                     <button
                        onClick={() => props.delete(list.id)}
                        className="w-6 h-6 rounded-full flex items-center text-xs bg-opacity-50 text-red-400 border-2 border-red-400 hover:bg-opacity-100 hover:text-white justify-center bg-red-400"
                     >
                        {props.FaTimes}
                     </button>
                  </div>
               </li>
            ))}
      </ul>
   );
};

export default UncompleteTasks;
