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
      <Stack.Screen name='index' options={{title: 'Home'}} />
      <Stack.Screen name='notes' options={{headerTitle: 'Notes'}} />
      <Stack.Screen name='create' options={{headerTitle: 'Create'}} />
      <Stack.Screen name='explore' options={{headerTitle: 'Explore'}} />
      <Stack.Screen name='feed' options={{headerTitle: 'Feed'}} />
      <Stack.Screen name='notifications' options={{headerTitle: 'Notifications'}} />
      <Stack.Screen name='profile' options={{headerTitle: 'Profile'}} />
    </Stack>
  );  
};

export default RootLayout;