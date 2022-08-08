import React from "react";


//Creacion de un Hook para manejar el localStorage
function useLocalStorage(itemName, initialValue) {

    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
  
    const [item, setItem] = React.useState(initialValue);
  
    React.useEffect(() => {
  
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
  
          //Si el localStorage está vacío, cargo un arreglo vacío.
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = [];
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
  
          setItem(parsedItem);
          setLoading(false);
        } catch (error) {
          setError(error);
        }
      }, 2000);
    });
  
  
    //Función que se encarga de persistir los datos en localStorage
    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
      } catch (error) {
        setError(error);
      }
    }
  
    return {
      item,
      saveItem,
      loading,
      error,
    };
  }
  
  export {useLocalStorage}