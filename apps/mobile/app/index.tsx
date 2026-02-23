import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState("Hello from React Native");
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>

      <Button
        title="Press Button"
        onPress={() => setMessage("You pressed the Button")}
      />

      <Pressable
        style={styles.pressable}
        onPress={() => setMessage("You pressed the Pressable")}
      >
        <Text style={styles.pressableText}>Pressable</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  text: {
    fontSize: 18,
  },
  pressable: {
    backgroundColor: '#00ffcc',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  pressableText: {
    fontWeight: 'bold',
  },
});