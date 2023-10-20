/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { PaperProvider, Text } from 'react-native-paper';
import { MD2DarkTheme } from './src/styles/themes';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AuthStack from './src/screens/AuthStack';


function App(): JSX.Element {
  const theme = MD2DarkTheme;

  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.colors.background,
      card: theme.colors.accent,
    }
  }

  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer theme={navTheme}>
          <AuthStack />
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider >
  );
}

export default App;
