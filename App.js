import React from 'react';
import Navbar from './screens/Navbar';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  return (
    // <AppNavigation/>
    <NavigationContainer>
      <Navbar />
    </NavigationContainer>
  )

}