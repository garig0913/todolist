const Menu = (props) => {
   return (
      <div className="w-full flex gap-2 border-b-2 border-blue-500">
         <button
            className={`py-3 bg-gray-300 rounded-t-xl font-bold px-5 ${
               props.atsonh ? "bg-blue-500 text-white" : "text-gray-600"
            }`}
            onClick={props.openA}
         >
            Бүгд
         </button>
         <button
            className={`py-3 bg-gray-300 rounded-t-xl font-bold px-5 ${
               props.btsonh ? "bg-blue-500 text-white" : "text-gray-600"
            }`}
            onClick={props.openB}
         >
            Хийсэн
         </button>
         <button
            className={`py-3 bg-gray-300 rounded-t-xl font-bold px-5 ${
               props.ctsonh ? "bg-blue-500 text-white" : "text-gray-600"
            }`}
            onClick={props.openC}
         >
            Хийгээгүй
         </button>
      </div>
   );
};

export default Menu;
