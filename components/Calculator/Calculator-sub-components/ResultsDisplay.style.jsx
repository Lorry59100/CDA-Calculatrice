import { StyleSheet } from "react-native";

export const ResultsDisplayStyle = StyleSheet.create({
    container: {
        backgroundColor: "black",
        margin: 5,
        borderRadius: 10,
        height: 80,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end"
    },
    result: {
        color: "white",
        marginRight: 15,
        fontSize: 30
    },
    operation: {
        fontSize: 20,
        color: "grey",
        marginRight: 15
    },
});
