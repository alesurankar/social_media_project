import { Stack } from "expo-router"

const RootLayout = () => {
    return (
        <Stack 
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#ff8c00'
                },
                headerTintColor: '#ffffff',
                headerTitleStyle: {
                    fontSize: 20,
                    fontWeight: 'bold',
                },
                contentStyle: {
                    paddingHorizontal: 10,
                    paddingTop: 10,
                    backgroundColor: '#ffffff'
                }
            }}>
                <Stack.Screen name='index' options={{title: 'Home'}} />
                <Stack.Screen name='notes' options={{headerTitle: 'Notes'}} />
            </Stack>
    );  
};

export default RootLayout;