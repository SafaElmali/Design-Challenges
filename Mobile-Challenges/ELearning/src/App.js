import React from 'react';
import { ImageBackground, SafeAreaView, ScrollView, Text, View } from 'react-native';
import Header from './components/Header/Header';
import Container from './Styled-Components/Container';
import ProfList from './components/ProfList/ProfList';
import CourseList from './components/CourseList/CourseList';

const App = _ => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ height: 400, marginBottom: 30 }}>
          <ImageBackground style={{ width: "100%", height: "100%" }} source={require('../assets/images/header-bg.png')}>
            <Header />
          </ImageBackground>
        </View>
        <View>
          <CourseList />
        </View>
        <View>
          <ProfList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
