import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const ToDoContext = React.createContext(); // Con los contextos podemos crear los providers y consumers para pasar los estados

function ToDoProvider(props) {

    //Invoco al hook personalizado que hicimos para llamar al localStorage
    const {
        item: toDos,
        saveItem: saveToDos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');

    const completedToDos = toDos.filter(todo => !!todo.completed).length;
    const totalToDos = toDos.length;

    let searchedToDos = [];

    if (!searchValue.length > 0) {
        searchedToDos = toDos;
    } else {
        searchedToDos = toDos.filter(toDo => {
            const toDoText = toDo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return toDoText.includes(searchText);
        })
    }


    const completeToDo = (text) => {

        const toDoIndex = toDos.findIndex(toDo => toDo.text === text);

        const newToDos = [...toDos];
        newToDos[toDoIndex].completed = true;

        saveToDos(newToDos);
    };


    const deleteToDo = (text) => {
        const toDoIndex = toDos.findIndex(toDo => toDo.text === text);
        const newToDos = [...toDos];

        //Borro del arreglo la posicion a borrar
        newToDos.splice(toDoIndex, 1);
        saveToDos(newToDos);
    };

    return (
        <ToDoContext.Provider value={{
            loading,
            error,
            totalToDos,
            completedToDos,
            searchValue,
            setSearchValue,
            searchedToDos,
            completeToDo,
            deleteToDo,
        }}>
            {props.children}
        </ToDoContext.Provider>
    );
}

export { ToDoContext, ToDoProvider }