import React from 'react';
import { ImageBackground, ScrollView, View } from 'react-native';
import Header from './components/Header/Header';
import CourseList from './components/CourseList/CourseList';
import ProfList from './components/ProfList/ProfList';

const Home = () => (
  <ScrollView>
    <View style={{ height: 400, marginBottom: 30 }}>
      <ImageBackground style={{ width: "100%", height: "100%" }} source={require('../../../assets/images/header-bg.png')}>
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
)

export default Home;