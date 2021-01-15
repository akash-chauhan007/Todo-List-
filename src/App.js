import './index.css';
import TextField from '@material-ui/core/TextField';
import './App.css';
import { useState } from 'react';
import { Button } from '@material-ui/core';
import firebase from "firebase";
import { db } from "./firebase_config";
import { useEffect } from "react";
import TodoListItem from './Todo';
import './Todo';


function App() {
   const [todos, setTodos] = useState([]);

const [todoInput, setTodoInput] = useState("");

useEffect(() => {
   getTodos();
}, []);  //blank to run only first launch

function getTodos() {
   db.collection("todos").onSnapshot(function (querySnapshot){
      setTodos(
         querySnapshot.docs.map((doc) => ({
            id: doc.id,
            todo: doc.data().todo,
            inprogress: doc.data().inprogress,
         }))
      );
   });

}

function appTodo(e) {
   e.preventDefault();

   db.collection("todos").add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
   });

   setTodoInput("");
}

   return (
        <div className="App" style={{
}} >
         <h1>Working List</h1>
         <form>
         <TextField 
         id="standard-basic"
          label="Write"
          value={todoInput}
          style={{ width: "3 0vw", maxWidth: "500px"}}
          onChange={(e) => setTodoInput(e.target.value)}
            />
           <Button type="submit" variant="contained" 
           onClick={appTodo}
            style={{diplay:"none"}} > Click Me </Button>
           </form>
      
         <div className="data">
         {todos.map((todo) =>(
               <TodoListItem 
               todo={todo.todo}
                inprogress={todo.inprogress}
                id={todo.id}
                />
            ))}



          </div>
      </div>
      
     );
   }








   




export default App;
