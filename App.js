import React, { Component } from "react";

import { Provider } from "react-redux";
import axios from "axios";
import { configureStore, reducers } from "./shared/store";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { HeadlinesContainer } from "./containers";
import { Articles } from "./components";
import { Header } from "./components";
const myApp = createStackNavigator({
    Home: {
        screen: HeadlinesContainer,
        navigationOptions: () => ({ header: null })
    },
    Articles: {
        screen: Articles,
        navigationOptions: () => ({ header: null })
    }
});

const AppNavigator = createAppContainer(myApp);
const store = configureStore(axios, {}, reducers);
export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Header />
                <AppNavigator />
            </Provider>
        );
    }
}
