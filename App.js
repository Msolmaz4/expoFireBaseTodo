
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import List from './app/screens/List';
import { NavigationContainer } from '@react-navigation/native';
import Details from './app/screens/Details';
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>

         <Stack.Screen name="My Todos"  options={{
            headerTitleAlign: 'center', // balikla ilgi konumu
            headerStyle: styles.container, //baslikta style
          }} component={List} />
<Stack.Screen name='Details' component={Details}>

</Stack.Screen>
   

  </Stack.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
},
});
