import React, { useState } from "react";
import { ScrollView, Text, FlatList } from 'react-native';
import { Header } from 'react-native-elements';

function PastItem(props) {
    return(
        <Text
            title={props.name}
        />
    );
}

function PastItems(todos){
    return(
        <ScrollView>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'Post List', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
            <FlatList
                data={todos}
                renderItem={({ item }) => <PastItem name={item} />}
            />
        </ScrollView>
    );
}

export default PastItems;
