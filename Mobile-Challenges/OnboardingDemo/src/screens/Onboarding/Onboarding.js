import React, { useRef, useState } from 'react';
import { StyleSheet, View, } from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import { OnboardingFirstImage, OnboardingSecondImage, OnboardingThirdImage } from '../../components/OnboardingImages';
import OnboardingView from './OnboardingView';

const OnBoarding = ({ navigation }) => {
  const viewPager = useRef();
  const [page, setPage] = useState(0);
  return (
    <ViewPager
      ref={viewPager}
      style={styles.viewPager} initialPage={0} onPageSelected={(e) => console.log(e)}>
      <View key="1" style={{ flex: 1 }}>
        <OnboardingView
          onboardImage={<OnboardingFirstImage />}
          text1={"Connect multiple accounts"}
          text2={"Stay connected to any platform you are used to. Starting from Twitter, instagram, Slack or whatever."}
          to={() => navigation.navigate('Home')}
        />
      </View>
      <View key="2" style={{ flex: 1 }}>
        <OnboardingView
          onboardImage={<OnboardingSecondImage />}
          text1={"Smart messaging system"}
          text2={"View your messages without leaving the video you currently watched."}
          to={() => navigation.navigate('Home')}
        />
      </View>
      <View key="3">
        <OnboardingView
          onboardImage={<OnboardingThirdImage />}
          text1={"Instant data analysis"}
          text2={"View and analyse all your activities grouped systematically for you to get conclusions."}
          to={() => navigation.navigate('Home')}
        />
      </View>
    </ViewPager>
  );
};

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
});

export default OnBoarding;