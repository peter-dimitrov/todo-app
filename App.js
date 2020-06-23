import React, { useState } from 'react';
import TodoList from "./components/TodoList";
import PastItems from "./components/PastItems";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export default function App() {
  const [todos, editTodos] = useState([])
  const [pastItems, editPastItems] = useState([])
  const handleDelete = (index) => {
    const newArr = todos
    newArr.splice(index, 1)
    editTodos(newArr)
  }
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="To do list">
          {() => <TodoList todos = {todos}
                            pastItems = {pastItems}
                            editPastItems = {editPastItems}
                            editTodos = {editTodos}
                            handleDelete = {handleDelete}/>}
        </Tab.Screen>
        <Tab.Screen name="Past items list">
          {() => <PastItems pastItems = {pastItems} todos = {todos} editTodos = {editTodos}/>}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator();
