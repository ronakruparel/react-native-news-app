import React from "react";
import { WebView, Text } from "react-native";
export default class Articles extends React.Component {
    render() {
        console.log(this.props);
        return <WebView source={{ uri: "www.google.com" }} />;
    }
}
