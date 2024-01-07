import { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import { collection, addDoc } from "firebase/firestore";
import { FIRESTORE_DB } from "../../firebaseConfig";

const List = ({ navigation }: any) => {
  const [todos, setTodos] = useState<any[]>([]);
  const [todo, setTodo] = useState("");

  useEffect(() => {}, []);
  const addTodo = async () => {
    try {
      //doc https://firebase.google.com/docs/firestore/quickstart?hl=en&authuser=0#web-modular-api
     await  addDoc(collection(FIRESTORE_DB, "todos"), {
        title: "i am test ",
        done: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder="Add new todo"
          onChangeText={(text: string) => setTodo(text)}
          value={todo}
        />
          <Button
            onPress={addTodo}
            title="Add Todo"
           disabled={todo === ""}
          ></Button>
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default List;
