import './App.css';
import Header from "./MyComponents/Header";
import AddTodo from "./MyComponents/AddTodo";
import {Todos} from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import React, {useState} from 'react';
// main component
// {} -> to us js
// if we want to return something, we have to wrap it.  ex ->  <> </>
function App() {
  if(localStorage.getItem("todos")){
 }
  // making todos as a object
  const onDelete = (todo)=>{
    console.log("I am onDelete of todo",todo);
    // deleting this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index,1); 
    setTodos(todos.filter((e)=>{
      return e!==todo; 
    }));
    // if(localStorage.getItem("todos")){
    //   localStorage.setItem("todos",json.stringify(todos));
    // }
   //  or
      localStorage.setItem("todos",JSON.stringify(todos));
    
  }

  const addTodo = (title,desc)=>{
    console.log('i am adding this todo',title,desc);
    let sno;
    if(todos.length==0){
      sno=0;
    }
    else{
      sno = todos[todos.length-1].sno+1;
    }
    const myTodo ={
      sno:sno,
      title:title,
      desc:desc,
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);

    localStorage.setItem("todos",JSON.stringify(todos));
  }
  // we are using hooks
  // setTodos is the function that update the todos
  const [todos,setTodos] = useState([]);
  return (
    <>
     <Header title="My ToDos List" searchBar={true}/>
     <AddTodo addTodo={addTodo}/>
     <Todos todos={todos} onDelete={onDelete}/>
     <Footer/>
    </>
  );
}

export default App;
