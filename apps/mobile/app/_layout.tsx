import { Stack } from "expo-router"
import { View, StyleSheet } from "react-native";


const RootLayout = () => {
  return (
    <Stack screenOptions={{
        headerStyle: {
          backgroundColor: '#4d5c75',
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold',
        },
        contentStyle: {
          backgroundColor: '#4d5c75'
        }
      }}
    >
      <Stack.Screen name="index"
        options={{ header: () => (
            <View style={styles.landingHeader} />
          ),
        }} 
      />
      <Stack.Screen name='profile' options={{headerTitle: 'Profile'}} />
      <Stack.Screen name='notifications' options={{headerTitle: 'Notifications'}} />
      <Stack.Screen name='explore' options={{headerTitle: 'Explore'}} />
      <Stack.Screen name='home' options={{headerTitle: 'Home'}} />
      <Stack.Screen name='test' options={{headerTitle: 'Test'}} />
    </Stack>
  );  
};

const styles = StyleSheet.create({
  landingHeader: {
    backgroundColor: '#4d5c75',
    height: 60,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
});

export default RootLayout;