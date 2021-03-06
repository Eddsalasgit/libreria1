import React, {useEffect, useState} from "react";
import { Text, View } from "react-native";
import {styles} from "./Lista.styles";

import { list, create, onCreate } from "../../services/todos";



export default function ListaScreen(){
  const [todos, setTodos] = useState();

  const [todo, setTodo] = useState({titulo:"", autor:"", isbm:""})
async function listTodos(){
  const todosFetched = await list();
  if(todosFetched) setTodos(todosFetched);
} 
async function createTodo(titulo, autor, isbm){
  const todoCreated = await create({titulo, autor, isbm});
  return todoCreated;
}
const addData = () => {
  createTodo(todo.titulo, todo.autor, todo.isbm);
};

useEffect(() =>{
  listTodos();
  let subscription;
  (async function subscribe(){
    subscription = await onCreate(listTodos);

    })();
    return () => {
      subscription?.unsubscribe();
    };
}, []);

return (
  
      <View style={styles.container}>
        


        {todos && 
          todos.map((todo)=> (
          <Text key={todo.id}> {`${todo.titulo} ${todo.autor} ${todo.isbm}`}</Text>
          ))}

      </View>
    );
  }