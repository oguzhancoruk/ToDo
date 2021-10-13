import React from "react";
import { Text, View } from "react-native";
import styles from './Header.style'

function Header({todo}) {
    return (
        <View style={styles.title_container}>
            <Text style={styles.main_title}>
                Yapılacaklar:
            </Text>
            <Text style={styles.main_number}>
           {todo.length}
            </Text>

        </View>
    )
}
export default Header;