import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Home from '@screen/home';
import IssuePost from '@screen/IssuePost';
import WebviewInApp from '@screen/WebviewInApp';
import {RootStackParams} from '@type/navigation.type';

const RootStack = createStackNavigator<RootStackParams>();

function RootStackNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={() => ({
          headerTitleAlign: 'center',
          ...TransitionPresets.SlideFromRightIOS,
        })}>
        <RootStack.Screen
          name={'Home'}
          component={Home}
          options={{title: 'Angular / Angular-cli'}}
        />
        <RootStack.Screen
          name={'IssuePost'}
          component={IssuePost}
          options={{title: 'Angular / Angular-cli'}}
        />
        <RootStack.Screen
          name={'WebviewInApp'}
          component={WebviewInApp}
          options={{headerShown: false}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default RootStackNavigator;
