import React, { Component } from "react";

import { Provider } from "react-redux";
import axios from "axios";
import { configureStore, reducers } from "./shared/store";
import { HeadlinesContainer } from "./containers";
const store = configureStore(axios, {}, reducers);
export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <HeadlinesContainer />
            </Provider>
        );
    }
}
