import React from "react";
import { StyleSheet, Text, View } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    }
});
export default class Apps extends React.Component {
    render() {
        return (
            <View>
                <Text>Welcome to React Native!</Text>
            </View>
        );
    }
}
