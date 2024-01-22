import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';


function AddTask(onAddTask) {
    const [title, setTitle] = useState('');
    title = title.trim();
    
    const handleAddTask = () => {
        if (title != '') {
            onAddTask(title);
            setTitle('');
        }
    };

    return (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={(text) => setTitle(text)}
            placeholder="Add a new task"
          />
          <Button title="Add Task" onPress={handleAddTask}/>
        </View>
      );
};

const styles = StyleSheet.create({
    addTodoForm: {
      margin: 10,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
});

export default AddTask