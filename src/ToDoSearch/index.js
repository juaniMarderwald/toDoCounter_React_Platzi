import React from "react";
import { ToDoContext } from "../ToDoContext";
import './ToDoSearch.css'

function ToDoSearch(){

    const { searchValue, setSearchValue } = React.useContext(ToDoContext);
   
    const onSearchValueChange = (event)=>{
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return (
        <input
         placeholder="Search a To Do..." 
         className="ToDoSearch"
         value={searchValue}
         onChange={onSearchValueChange} /* Cuando se escriba en el input se llama a la propiedad onChange con el metodo onSearchValueChange, 
                                        lo que hará es mostrar por consola el valor q vamos escribiendo, y tmb llama a la función "setSearchValue" */
         />       
    );
}

export {ToDoSearch}