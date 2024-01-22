import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask';

function ToDoList(tasks) {
  const [toDos, settoDos] = useState([]);
  const toDos2 = tasks.map(title => ({id: uuidv4(), title: title}));
  settoDos(toDos2);


  const addToDo = (newTitle) => {
    const newTask = {id: uuidv4(), title: newTitle};
    settoDos(toDos => [...toDos, newTask]);
  };

  const removeToDo = (id) => {
    settoDos(toDos => toDos.filter((toDo) => toDo.id !== id));
  };

  return (
    <View style={styles.container}>
      {toDos.map((toDo) => (
        <View key={toDo.id} style={styles.taskContainer}>
          <Text>{toDo.title}</Text>
          <Button
            title="Remove"
            onPress={() => removeToDo(toDo.id)}
            color="#FF0000"
          />
        </View>
      ))}
      <AddTask onAddTask={addToDo}/>
    </View>
  );
};

ToDoList.defaultProps = {
  tasks: []
};

const styles = StyleSheet.create({
    todoListContainer: {
      margin: 10,
    },
    todoItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
    },
});

export default ToDoList;
