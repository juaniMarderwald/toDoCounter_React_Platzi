import React from "react";

import { ToDoContext } from "../ToDoContext";
import { ToDoCounter } from '../ToDoCounter';
import { ToDoSearch } from "../ToDoSearch";
import { CreateToDoButton } from "../CreateToDoButton";
import { ToDoItem } from "../ToDoItem";
import { ToDoList } from "../ToDoList";
import {Modal} from '../Modal'

function AppUI() {
    const {
        loading,
        error,
        searchedToDos,
        completeToDo,
        deleteToDo,
    } = React.useContext(ToDoContext);

    return (
        <React.Fragment>
            <ToDoCounter />
            <ToDoSearch />

            <ToDoList>
                {error && <p>desesperate, hubo un error...</p>}
                {loading && <p>Estamos cargando, no desesperes...</p>}
                {(!loading && !searchedToDos.length) && <p>Crea tu primer To Do...</p>}

                {searchedToDos.map(toDo => (
                    <ToDoItem
                        key={toDo.text}
                        text={toDo.text}
                        completed={toDo.completed}
                        onComplete={() => completeToDo(toDo.text)}
                        onDelete={() => deleteToDo(toDo.text)}
                    />
                ))}
           </ToDoList>
           
           <Modal>
            <p>TELETRANSPORTACIÓN</p>
           </Modal>

            <CreateToDoButton />
        </React.Fragment>
    );
}

export { AppUI };