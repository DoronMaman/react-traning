import './App.css';
import { useEffect, useState } from 'react';

function LoadData() {
  const [dataType,setDataType]=useState('https://jsonplaceholder.typicode.com/todos')
  const [items,setItems]= useState([]);
  useEffect(()=>{
    fetch(dataType)
    .then(response => response.json())
    .then(json =>{ 
      (dataType==='https://dummyjson.com/products') ?  setItems(json.products) : setItems(json)

    console.log(json)
    return ()=>{
      console.log('finish')
    }
    })  },[dataType])
  return (
    <div>
    <button onClick={()=>setDataType('https://jsonplaceholder.typicode.com/todos')}>ALL USERS</button>
    <button onClick={()=>setDataType('https://dummyjson.com/products')}>Product</button>

    {items.map(item=>{
      return <div key={item.id}>
        <p> userId: {item.id}</p>
        <p> title : {item.title}</p>

      </div>
    })}
    </div>

  );
}

export default LoadData;