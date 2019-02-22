import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class Apps extends React.Component {
    render() {
        const { topheadlines } = this.props;
        topheadlines.data.map(headlines => console.log(headlines));
        return (
            <View>
                {topheadlines.data.map(headlines => {
                    return <Text>{headlines.title}</Text>;
                })}
            </View>
        );
    }
}
