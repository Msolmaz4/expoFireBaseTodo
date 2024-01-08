import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import List from "./app/screens/List";
import { NavigationContainer } from "@react-navigation/native";
import Details from "./app/screens/Details";
import Login from "./app/screens/Login";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name="My Todos"
          component={List}
        />
        <Stack.Screen name="login" component={Login}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


