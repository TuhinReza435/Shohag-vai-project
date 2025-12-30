import React from "react";
const Practice = () => {
  function handleClick() {
    console.log("You Click me");
  }
  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-amber-800 text-white p-1 rounded-2xl cursor-pointer"
      >
        Click me
      </button>
    </div>
  );
};

export default Practice;
