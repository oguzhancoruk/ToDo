import React, { useState } from 'react';
import {
  SafeAreaView,StyleSheet, View,TouchableOpacity,FlatList} from 'react-native';

import SearchBar from './components/SearchBar/SearchBar';
import Todo from './components/ToDoCard/ToDo';
import Header from './components/Header/Header';

function App() {
  const [todo, setTodo] = useState([
    {id:1,text:'First todo', completed:false}
  ]);
  const [text, setText] = useState('');
  const [stil, setStyle] = useState('');

  function deleteItem(item)
  {
    setTodo(todo.filter(i=>i !==item))
  
  }
  const drawItem =  itemId=>
  {
    
    const newTodos=todo.map(item=>
    {
      if(item.id ==itemId)
      {
          return {...item,completed:true}
      }
      return item;
    });
    setTodo(newTodos);
  }

  function renderTodo({ item }) {

    return (
      <TouchableOpacity onPress={()=>drawItem(item.id)} onLongPress={()=>deleteItem(item)} style={{backgroundColor:stil}} >
        <Todo todo={item} setStyle={item}  />
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.main_container}>
      <Header todo={todo}/>
      <View>
        <FlatList data={todo} renderItem={renderTodo} />
      </View>
      <SearchBar todo={todo} setTodo={setTodo} text={text} setText={setText}/>
    </SafeAreaView>
  )

}

const styles = StyleSheet.create(
  {
    main_container:
    {
      backgroundColor: '#102027',
      flex: 1,
    }
  }
)


export default App;