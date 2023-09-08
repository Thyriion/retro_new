/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { PaperProvider } from 'react-native-paper';


function App(): JSX.Element {

  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}

export default App;
