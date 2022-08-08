import React from "react";
import './ToDoItem.css';
import { MdDelete } from "react-icons/md";
import { TiTickOutline } from "react-icons/ti";


function ToDoItem(props){
    
/*    const onComplete = ()=>{
        alert('Ya completaste el To Do: ' + props.text);
    };*/

   /* const onDelete = () =>{
        alert('Borraste el To Do: ' + props.text);
    }*/

    return (
        <li className="ToDoItem">
          <span
            className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={props.onComplete}
          >
            √
          </span>
          <p className={`ToDoItem-p ${props.completed && 'ToDoItem-p--complete'}`}>
            {props.text}
          </p>
          <span
            className="Icon Icon-delete"
            onClick={props.onDelete}
          >
            X
          </span>
        </li>
      );
}

export { ToDoItem };