import React from "react";
import { HeadlinesContainer } from "./containers";
import { View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
class Routes extends React.Component {
    render() {
        console.log("AA");
        return <View />;
    }
}
const AppNavigator = createStackNavigator({
    Home: {
        screen: HeadlinesContainer
    }
});
export default createAppContainer(AppNavigator);
