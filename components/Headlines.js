import React from "react";
import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native";
const styles = {
    title: {
        fontWeight: "bold",
        textAlign: "left",
        padding: 10
    },
    image: {
        height: 200,
        width: 300,
        marginLeft: "auto",
        marginRight: "auto"
    }
};
export default function Headlines({ topheadlines, navigation }) {
    return (
        <ScrollView>
            {topheadlines.data.map(headlines => {
                return (
                    <TouchableOpacity
                        key={headlines.title}
                        onPress={() =>
                            navigation.navigate("Articles", {
                                url: headlines.url
                            })
                        }
                    >
                        <Image
                            source={{ uri: headlines.urlToImage }}
                            style={styles.image}
                        />
                        <Text style={styles.title}>{headlines.title}</Text>
                        <Text>{headlines.url}</Text>
                        <Text>{headlines.description}</Text>
                    </TouchableOpacity>
                );
            })}
        </ScrollView>
    );
}
