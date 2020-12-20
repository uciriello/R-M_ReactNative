import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Home from './app/Home';
import NavigationTest from './app/NavigationTest';



const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Test" component={NavigationTest} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
