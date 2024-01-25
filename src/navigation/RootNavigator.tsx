import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '@screens';
import React from 'react';
import {APP_SCREEN, RootStackParamList} from './ScreenTypes';
const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigation = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name={APP_SCREEN.HOME}
        component={Home} //Replace DrawerNavigator with MainScreen in ./Tab if you don't want to use drawer menu
        options={{gestureEnabled: false, headerShown: false}}
      />
    </RootStack.Navigator>
  );
};
