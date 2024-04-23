import { StyleSheet } from "react-native";

export const CalculatorStyle = StyleSheet.create({
    container: {
        backgroundColor: "grey",
        width: "100%",
        height: "100%",
        borderRadius: 10,
        padding: 5
    },
    inputsContainer: {
        flexDirection: "row"
    },
    inputNumbersContainer: {
        width: "66%",
        paddingLeft: 5
    },
    inputNumbersRowContainer: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    inputOperatorRowContainer: {
        width: "33%",
        alignItems: "flex-end",
        paddingRight: 5
    },
});
