import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import Header from './components/Header';
import Avatar from './Styled-Components/Avatar';
import Container from './Styled-Components/Container';
import StyledText from './Styled-Components/Text';
import ProfOne from '../assets/images/prof-1.svg';
import ProfTwo from '../assets/images/prof-2.svg';
import ProfThree from '../assets/images/prof-3.svg';
import ProfFour from '../assets/images/prof-4.svg';
import ProfList from './components/ProfList/ProfList';
import CourseList from './components/CourseList/CourseList';

const App = _ => {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 0.4 }}>
          <Header />
        </View>
        <View style={{ flex: 0.3 }}>
          <CourseList />
        </View>
        <View style={{ flex: 0.3 }}>
          <ProfList />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
