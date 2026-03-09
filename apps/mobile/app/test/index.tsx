import { View, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { api } from "@packages/utils";

const Test = () => {
    const [feedMessage, setFeedMessage] = useState<string>("Loading...");

    useEffect(() => {
        // Test your API endpoint
        api
        .get("/test")
        .then((res) => setFeedMessage(res.data.message || "API OK"))
        .catch((err) => setFeedMessage("API error: " + err.message));
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.message}>{feedMessage}</Text>
            <Text>This is Test Page</Text>
        </View> 
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffffff',
    },
        message: {
        color: "red",
        marginBottom: 20,
        textAlign: "center",
    },
});

export default Test;