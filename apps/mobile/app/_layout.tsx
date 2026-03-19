import { Stack } from "expo-router"

const RootLayout = () => {
  return (
    <Stack 
      screenOptions={{
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
      }}>
      <Stack.Screen name='index' options={{title: 'Landing Page'}} />
      <Stack.Screen name='profile' options={{headerTitle: 'Profile'}} />
      <Stack.Screen name='notifications' options={{headerTitle: 'Notifications'}} />
      <Stack.Screen name='explore' options={{headerTitle: 'Explore'}} />
      <Stack.Screen name='home' options={{headerTitle: 'Home'}} />
      <Stack.Screen name='test' options={{headerTitle: 'Test'}} />
    </Stack>
  );  
};

export default RootLayout;