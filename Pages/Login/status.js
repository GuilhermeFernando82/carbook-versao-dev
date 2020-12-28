import {StyleSheet} from "react-native";

const css = StyleSheet.create({
    login__msg:(text='none')=>({
        fontWeight:"bold",
        fontSize: 22,
        color:"red",
        marginBottom: 15,
        display: text
    })
});
export {css};