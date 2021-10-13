import React, { useState } from "react";
import { Text, View, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";
import styles from './SearchBar.style'
import Todo from '../ToDoCard/ToDo'

const SearchBar = ({ todo, setTodo, setText, text }) => {
    const [backgroundState, setBG] = useState("#808080");
    const handleClick = () => {
        const newTodo={
            id:Math.random(),
            text:text,
            completed:false,
        }
        setTodo([...todo, newTodo]);
        setText('');
    };
    function handleChange (item) 
    {
         setText(item);
         if (item) {
            setBG('#ffa500')
        }
        else { setBG('#808080') }
    }
    return (
        <View style={styles.contaniner_searchBar}>
            <TextInput  onChangeText={handleChange} style={styles.todo_text} placeholder="Yapılacak..." placeholderTextColor='#5b6467' />
            <View style={styles.search_line} />
            <View style={styles.container}>
                <TouchableOpacity
                    style={{
                        alignItems: "center",
                        backgroundColor: backgroundState,
                        padding: 10,
                        borderRadius: 10,
                        margin: 10
                    }}
                    onPress={handleClick}
                >
                    <Text>Kaydet</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
export default SearchBar;