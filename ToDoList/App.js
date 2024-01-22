import React from 'react';
import { View, StyleSheet } from 'react-native';
import ToDoList from './components/ToDoList';

export default function App() {
  const tasks = ["Task 1", "Task 2", "Task 3"];

  return (
    <View style={styles.container}>
      <ToDoList
        toDos={tasks}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
});
