import React from 'react';
import { SafeAreaView } from 'react-native';
import Home from './pages/Home/Home';

const App = _ => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <Home />
    </SafeAreaView>
  );
};

export default App;
