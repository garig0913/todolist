const Input = (props) => {
   return (
      <div className="w-full py-4 flex justify-center">
         <input
            className="border border-r-0 py-2 px-4 border-gray-300 rounded-l-full"
            onChange={props.setTask}
            type="text"
            placeholder="хийх ажлаа оруул"
         />
         <button
            className="border border-l-0 py-2 px-4 rounded-r-full border-gray-300 bg-red-400 text-white"
            onClick={props.taskHandler}
         >
            Insert
         </button>
      </div>
   );
};

export default Input;
