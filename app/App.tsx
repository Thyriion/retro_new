/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { PaperProvider, Text } from 'react-native-paper';
import { MD2DarkTheme } from './src/styles/themes';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthStack from './src/screens/AuthStack';


function App(): JSX.Element {
  const theme = MD2DarkTheme;
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <SafeAreaView style={{ backgroundColor: theme.colors.background, flex: 1 }}>
          <AuthStack />
        </SafeAreaView>
      </NavigationContainer>
    </PaperProvider >
  );
}

export default App;
