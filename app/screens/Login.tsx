import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {};
  const signIn = async () => {};
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text:string)=>setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        textContentType="password"
        value={password}
        onChangeText={(text:string)=>setPassword(text)}
      />
      <Button title="Sign Up" onPress={signUp}></Button>
      <Button title="Sign In" onPress={signIn}></Button>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  input: {},
});
