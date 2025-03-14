import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screens
import HomeScreen from './screens/HomeScreen';
import CoordinateScreen from './screens/CoordinateScreen';
import EventsScreen from './screens/EventsScreen';/* 
// import CalendarScreen from './screens/CalendarScreen';
// import CoordinateScreen from './screens/CoordinateScreen';
// import SettingsScreen from './screens/SettingsScreen';
// import AdminScreen from './screens/AdminScreen'; */
//import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react-native";

const Stack = createStackNavigator();

export default function App() {
  return (
    //<Authenticator.Provider>
    //  <Authenticator>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Events" component={EventsScreen} />
            <Stack.Screen name="Coordinate" component={CoordinateScreen} />
            {/* <Stack.Screen name="Calendar" component={CalendarScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="Admin" component={AdminScreen} /> */}
          </Stack.Navigator>
        </NavigationContainer>
    //  </Authenticator>
    //</Authenticator.Provider>
  );
}