import React from "react";
import './CreateToDoButton.css'

function CreateToDoButton(){

    const onClickButton= (msg) =>{
        alert(msg)
    };

    return (
        <button 
            className="CreateToDoButton" 
            onClick={()=>onClickButton('Aqui se deberia abrir el modal')}    
        >
            +
        </button>
    );
}

export {CreateToDoButton}