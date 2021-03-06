import React, {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import ViewPager from '@react-native-community/viewpager';
import {
  OnboardingFirstImage,
  OnboardingSecondImage,
  OnboardingThirdImage,
} from '../../components/OnboardingImages';
import OnboardingView from './OnboardingView';

const OnBoarding = ({navigation}) => {
  const viewPager = useRef();

  return (
    <ViewPager ref={viewPager} style={styles.viewPager} initialPage={0}>
      <View key="1">
        <OnboardingView
          onboardImage={<OnboardingFirstImage />}
          title={'Connect multiple accounts'}
          detail={
            'Stay connected to any platform you are used to. Starting from Twitter, instagram, Slack or whatever.'
          }
          to={() => navigation.navigate('Home')}
          viewPagerRef={viewPager}
          page={1}
        />
      </View>
      <View key="2">
        <OnboardingView
          onboardImage={<OnboardingSecondImage />}
          title={'Smart messaging system'}
          detail={
            'View your messages without leaving the video you currently watched.'
          }
          to={() => navigation.navigate('Home')}
          viewPagerRef={viewPager}
          page={2}
        />
      </View>
      <View key="3">
        <OnboardingView
          onboardImage={<OnboardingThirdImage />}
          title={'Instant data analysis'}
          detail={
            'View and analyse all your activities grouped systematically for you to get conclusions.'
          }
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
