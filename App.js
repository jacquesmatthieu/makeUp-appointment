import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from './packages/view/home/home';
import Profile from './packages/view/profile/profile';


const App = createStackNavigator({
  Home: {
    screen: Home,
  },
  Profile: {
    screen: Profile,
  },
});

export default App;
