import { StyleSheet, TouchableWithoutFeedbackBase } from "react-native";

export default StyleSheet.create
    (
        {
            contaniner_searchBar:
            {
                position: 'absolute', //Here is the trick
                bottom: 0,
                backgroundColor: '#37474f',
                flex: 1,
                margin: 10,
                marginBottom: 20,
                width: 375,
                height: 125,
                borderRadius: 10,

            },
            todo_text:
            {
                color: 'white',
                marginLeft: 5,
                marginRight: 5,
                marginTop: 5,
                fontSize: 15,
            },
            search_line:
            {
                borderWidth: 1.5,
                marginLeft: 10,
                marginRight: 10,
                borderColor: '#475962',

            },
            

        }
    )