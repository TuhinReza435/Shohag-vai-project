import React from 'react';
const hero = (props) => {
    return (
        <div>
           <button onClick={props.ChildBtnClick}>Btn Click</button>
        </div>
    );
};

export default hero;