import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Home} from '../screens/home';
import {Details} from '../screens/details';
import {DataContextProvider} from '../context/Data.context';

const AppStack = createStackNavigator();

const AppStackScreen = () => {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="Details" component={Details} />
    </AppStack.Navigator>
  );
};

const Routes = () => {
  return (
    <DataContextProvider>
      <NavigationContainer>
        <AppStackScreen />
      </NavigationContainer>
    </DataContextProvider>
  );
};

export default Routes;
