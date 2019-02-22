import React from "react";
import { View, Text } from "react-native";
const styles = {
    header: {
        top: 0,
        height: 50,
        backgroundColor: "#138fb7"
    },
    appName: {
        top: 10,
        color: "white",
        textAlign: "center",
        fontSize: 26,
        fontFamily: "Roboto"
    }
};
export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.appName}>news app</Text>
            </View>
        );
    }
}
