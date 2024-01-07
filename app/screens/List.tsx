import { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, TextInput, FlatList, TouchableOpacity } from "react-native";
import { collection, addDoc, onSnapshot, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { FIRESTORE_DB } from "../../firebaseConfig";
import Ionicons from '@expo/vector-icons/Ionicons'; //doc bak
import {Entypo} from "@expo/vector-icons"



export interface TODO {
  title:string,
  done:boolean,
  id:string,
}


const List = ({ navigation }: any) => {
  const [todos, setTodos] = useState<TODO[]>([]);
  const [todo, setTodo] = useState("");

  useEffect(() => {

   const todoRef = collection(FIRESTORE_DB, "todos")
   //onSnapshot gercek zamanli okumaya yarara https://firebase.google.com/docs/firestore/query-data/listen?hl=tr
   const subscriber = onSnapshot(todoRef,{
    next:(snapshot)=>{
      const todos:any[] = []
      snapshot.docs.forEach((doc)=>{
       // console.log(doc.data())
       todos.push({
        id:doc.id,
        ...doc.data()
       } as TODO)
      })
      setTodos(todos)
    }
   })
    return ()=>subscriber()

  }, []);
  const addTodo = async () => {
    try {
      //doc https://firebase.google.com/docs/firestore/quickstart?hl=en&authuser=0#web-modular-api
     await  addDoc(collection(FIRESTORE_DB, "todos"), {
        title: todo,
        done: false,
      });
      setTodo("")
    } catch (error) {
      console.log(error);
    }
  };
  const renderTodo =({item}:any)=>{
    const ref = doc(FIRESTORE_DB,`todos/${item.id}`)

const toogleDone = async ()=>{
updateDoc(ref,{done:!item.done})
}
const deleteItem = async ()=>{
deleteDoc(ref)
}

    return(
   <View style={styles.todoContainer}>
    <TouchableOpacity onPress={toogleDone} style={styles.todo}>
      { item.done && <Ionicons name="md-checkmark-circle" color="green" size={24}/>}
      { !item.done && <Entypo name="circle" size={24} color="black"/>}
      <Text style={styles.todoText}>{item.title}</Text>

    </TouchableOpacity>
    <Ionicons name="trash-bin-outline" size={24} color="red" onPress={deleteItem}/>
   </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput style={styles.input}
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
      <View>
        {
          todos.length > 0 && (
            <View>
              <FlatList
               data={todos}
               renderItem={(item)=>renderTodo(item)}
               keyExtractor={(todo:TODO)=>todo.id}
              />
            </View>
          )
        }
        
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal:20,
  },
  form:{
    marginVertical:20,
    flexDirection:"row",
    alignItems:"center",
  },
  input:{
    flex:1,
    height:40,
    borderWidth:1,
    borderRadius:4,
    padding:10,
  },
  todoContainer:{
    flexDirection:"row",
    alignItems:"center",
    backgroundColor:"#fff",
    padding:10,
    marginVertical:4,
  },
  todoText:{
flex:1,
paddingHorizontal:4,
  },
  todo:{
    flex:1,
    flexDirection:"row",
    alignItems:"center",
  }

});

export default List;
