import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import RightArrow from '../../components/RightArrow';

const OnboardingView = ({
  to,
  onboardImage,
  title,
  detail,
  viewPagerRef,
  page,
}) => {
  return (
    <View style={styles.OnboardingView}>
      <View style={styles.imageWrapper}>{onboardImage}</View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.detailWrapper}>
        <Text style={styles.detail}>{detail}</Text>
      </View>
      {viewPagerRef ? (
        <View style={styles.buttonWrapper}>
          <TouchableOpacity onPress={to} style={styles.skipButton}>
            <Text style={styles.skipButtonText}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => viewPagerRef.current.setPage(page)}>
            <View style={styles.nextButtonViewWrapper}>
              <View style={styles.nextButtonView}>
                <RightArrow />
              </View>
              <View style={styles.nextButtonViewShadow} />
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.navigationButtonView}>
          <TouchableOpacity onPress={to}>
            <View style={styles.navigationButtonTextWrapper}>
              <Text style={styles.navigationButtonText}>Get Started</Text>
              <RightArrow />
            </View>
            <View style={styles.navigationButtonViewShadow} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  OnboardingView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageWrapper: {
    flex: 0.6,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  titleWrapper: {
    flex: 0.2,
    justifyContent: 'center',
    marginTop: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    width: 184,
    textAlign: 'center',
    color: '#282C38',
  },
  detailWrapper: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  detail: {
    fontSize: 16,
    fontWeight: 'normal',
    width: 250,
    textAlign: 'center',
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  skipButton: {
    height: 30,
  },
  skipButtonText: {
    fontSize: 16,
    color: '#7D8496',
  },
  nextButton: {
    height: 50,
  },
  nextButtonViewWrapper: {
    width: 100,
  },
  nextButtonView: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    backgroundColor: '#FF9963',
    borderBottomRightRadius: 20,
    position: 'relative',
  },
  nextButtonViewShadow: {
    backgroundColor: '#FF9963',
    opacity: 0.1,
    position: 'absolute',
    top: 10,
    right: -10,
    width: 50,
    height: 50,
    borderBottomRightRadius: 20,
  },
  navigationButtonView: {
    flex: 0.3,
    alignItems: 'center',
  },
  navigationButtonTextWrapper: {
    width: 167,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF9963',
    borderBottomRightRadius: 20,
  },
  navigationButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 15,
  },
  navigationButtonViewShadow: {
    backgroundColor: '#FF9963',
    opacity: 0.1,
    position: 'absolute',
    top: 15,
    left: 15,
    zIndex: -1,
    width: 167,
    height: 60,
    borderBottomRightRadius: 20,
  },
});

export default OnboardingView;
