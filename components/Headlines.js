import React from "react";
import { ScrollView, Text, View, Image } from "react-native";
const styles = {
    title: {
        fontWeight: "bold",
        textAlign: "center",
        width: "60%"
    },
    image: {
        height: 200,
        width: 300,
        marginLeft: "auto",
        marginRight: "auto"
    }
};
export default class Apps extends React.Component {
    render() {
        const { topheadlines } = this.props;
        console.log(topheadlines);
        return (
            <ScrollView>
                {topheadlines.data.map(headlines => {
                    return (
                        <View key={headlines.title}>
                            <Image
                                source={{ uri: headlines.urlToImage }}
                                style={styles.image}
                            />
                            <Text style={styles.title}>{headlines.title}</Text>
                            <Text>{headlines.url}</Text>
                            <Text>{headlines.description}</Text>
                        </View>
                    );
                })}
            </ScrollView>
        );
    }
}
