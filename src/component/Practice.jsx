import React from "react";

const Practice = () => {
  const listitem = [
    { id: 1, value: "Learn react Like a Cake Walk" },
    { id: 2, value: "Get String in JavaScript" },
    { id: 3, value: "Be Master of Problem solving" },
  ];
  const items = [];
  listitem.map((element) => {
    const val = <li key={element.id}>{element.value}</li>;
    items.push(val)
  });
  return <div>{items}</div>
};

export default Practice;
