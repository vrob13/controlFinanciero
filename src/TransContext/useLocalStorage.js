import React from "react";

function useLocalStorage(itemName, initialValue) {
  
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
  
    React.useEffect(() => {
      setTimeout(()=>{
  
        try{
          const localStorageItem = localStorage.getItem(itemName);
          let parseItem;
    
          if(!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(initialValue))
            parseItem = initialValue;
          }else{
            parseItem = JSON.parse(localStorageItem);
          }
          setItem(parseItem);
          setLoading(false);
        }catch (error) {
          setError(error);
        }
      },20);
    });
    
    
    const saveItem = (newItem) => {
      try {
        const stringifyItem = JSON.stringify(newItem);
        localStorage.setItem(itemName,stringifyItem);
        setItem(newItem); 
      }catch (error){
        setError(error);
      }
    }
  
    return{
        item,
        saveItem,
        loading,
        error
    };
  }


export {useLocalStorage}