import React from "react";
import { Headlines } from "../components";
import { Text } from "react-native";
import { connect } from "react-redux";
import { getTopHeadlines } from "../shared/store";
const styles = {
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    }
};
class HeadlinesContainer extends React.Component {
    componentDidMount() {
        this.props.getTopHeadlines();
    }

    render() {
        return this.props.topheadlines.data.length ? (
            <Headlines {...this.props} handlePress={this.handlePress} />
        ) : (
            <Text style={styles.welcome}>Loading!!</Text>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getTopHeadlines: () => dispatch(getTopHeadlines())
    };
};

const mapStateToProps = state => {
    return {
        topheadlines: state.topheadlines
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeadlinesContainer);
