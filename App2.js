import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon, Card, Image } from 'react-native-elements';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Home({navigation}) {
  return (
    <View>
      <Card>
        <FlatList
          data={['1', '2', '3']}
          renderItem={({ item }) => <Text>{item}</Text>}
        />
        <Image
          source={{ uri: 'https://user-images.githubusercontent.com/5962998/48658581-f4170a00-ea1a-11e8-866c-df4f42f21947.gif' }}
          style={{ width: 200, height: 200 }}
        />
        <Icon
          raised
          name='user'
          type='font-awesome'
          color='#f50'
          onPress={() => navigation.navigate("About")} />
      </Card>
    </View>
  );
}

function About() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>About Screen</Text>
    </View>
  );
}


export default App;