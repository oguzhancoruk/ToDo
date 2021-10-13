import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import styles from './ToDo.style';


function TodoCard({ todo }) {
    return (

        <View style={styles.main_todo_card}>
            <Text style={{
                color: 'white',
                fontSize: 18,
                textDecorationLine:todo?.completed?'line-through':'none',
            }}>{todo.text}</Text>
        </View>


    )
}
export default TodoCard;