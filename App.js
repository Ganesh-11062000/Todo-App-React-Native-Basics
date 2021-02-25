import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import AddTodo from './components/addTodo';
import Header from './components/header';
import TodoItem from './components/todoItem';


export default function App() {

  // state variables
  const [todos, setTodos] = useState([
    { task: 'Learn React-Native basics', key: '1' },
    { task: 'Learn networking and api', key: '2' },
    { task: 'Learn firebase and hosting', key: '3' }
  ]);

  // event handlers
  const deleteItem = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    })
  }

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [
          {
            key: Math.random().toString(),
            task: text
          },
          ...prevTodos
        ];
      });
    } else {
      Alert.alert('OOPS', "Item must be atleast 3 characters long.", [
        {
          text: "Understood",
          onPress: () => console.log("Alert closed")
        }
      ])
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log("dismissed");
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} deleteItem={deleteItem} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  todoText: {
    fontSize: 20,
    padding: 8,
  },
  content: {
    flex: 1,
  },
  list: {
    flex: 1,
    margin: 20,
  }
})