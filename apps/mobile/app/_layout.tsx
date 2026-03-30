import { View, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { AuthContext } from "@packages/utils";


export default function RootLayout() {
  const [token, setToken] = useState<string | undefined>();
  const [ready, setReady] = useState(false);

  // Load token from AsyncStorage once
  useEffect(() => {
    const loadToken = async () => {
      const storedToken = await AsyncStorage.getItem("token");
      console.log("Loaded token from AsyncStorage:", storedToken);
      setToken(storedToken ?? undefined);
      setReady(true);
    };
    loadToken();
  }, []);

  const handleToken = async (newToken: string) => {
    console.log("Saving token from LandingPage:", newToken);
    await AsyncStorage.setItem("token", newToken);
    setToken(newToken);
  };
  
  return (
    <AuthContext.Provider value={{ token, ready, handleToken }}>
      <View style={styles.container}>
        {/* Custom header */}
        <StatusBar style="light" />
        <View style={styles.landingHeader} />
        <Slot />
      </View>
    </AuthContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333344",
  },
  landingHeader: {
    backgroundColor: "#333344",
    height: 35,
    justifyContent: "center",
  }
});