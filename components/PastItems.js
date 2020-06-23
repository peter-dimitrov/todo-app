import React from "react";
import { ScrollView, Text, FlatList, Button } from 'react-native';
import { Header, Card } from 'react-native-elements';

function PastItem(props) {
    return(
      <Card>
      <Text>
        {props.name}
      </Text>
      <Button 
        title = "Add to todo list"
        onPress = {() => props.editTodos([...props.todos, props.name])}/>
      </Card>
    );
  }
  
  function PastItems(props){
    return(
        <ScrollView>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'Past Items', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
            <FlatList
                data={props.pastItems}
                renderItem={({ item }) => <PastItem todos = {props.todos} editTodos = {props.editTodos} name={item} />}
            />
        </ScrollView>
    );
  }

export default PastItems;
