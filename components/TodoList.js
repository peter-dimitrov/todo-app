import React, { useState, useEffect } from "react";
import { ScrollView, View, Button, TextInput } from 'react-native';
import { CheckBox, Header } from 'react-native-elements';

function TodoListItem(props) {
    const [checked, setChecked] = useState(false)
    return(
      <View>
        <CheckBox
            checked = {checked}
            title = {props.name}
            onPress={() => setChecked(!checked)}
        />
        <Button 
        title = {"Click to remove"}
        onPress = {() => props.handleDelete(props.index)}
        />
      </View>
    );
  }
  
  function TodoList(props){
    useEffect(() => {
        console.log('updated'), todos;
    });
    const [text, setText] = useState('');
    const todos = props.todos.map((todo, index) =>
    <TodoListItem id={index} key = {index} name={todo} handleDelete = {props.handleDelete} />)
    return(
      <View>
        <ScrollView>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'Todo List', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
            {todos}
        </ScrollView>
        <TextInput
          style={{height: 80}}
          placeholder="Add new item!"
          onChangeText={text => setText(text)}
          defaultValue={text}
          onSubmitEditing = 
          {() => props.editTodos([...props.todos, text], props.editPastItems([...props.pastItems, text]))}
        />
      </View>
    );
  }

export default TodoList;