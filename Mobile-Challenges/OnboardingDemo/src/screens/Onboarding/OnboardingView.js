/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import RightArrow from '../../components/RightArrow';

const OnboardingView = ({ to, onboardImage, text1, text2, goNextOnboardView, viewPagerRef, page }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ flex: 0.6, justifyContent: 'flex-end', alignItems: 'center' }}>
                {onboardImage}
            </View>
            <View style={{ flex: 0.2, justifyContent: 'center', marginTop: 40, alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: "bold", width: 184, textAlign: 'center' }}>{text1}</Text>
            </View>
            <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'flex-start' }}>
                <Text style={{ fontSize: 16, fontWeight: "normal", width: 250, textAlign: 'center' }}>{text2}</Text>
            </View>
            {viewPagerRef ?
                <View style={{ flex: 0.3, flexDirection: 'row', justifyContent: 'space-around' }}>
                    <TouchableOpacity onPress={to}>
                        <Text style={{ fontSize: 16, color: '#7D8496' }}>Skip</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => viewPagerRef.current.setPage(page)}>
                        <View style={{ width: 100, height: 150 }}>
                            <View
                                style={{
                                    width: 50,
                                    height: 50,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    alignSelf: 'flex-end',
                                    marginRight: 20,
                                    backgroundColor: "#FF9963",
                                    borderBottomRightRadius: 20,
                                    zIndex: 1
                                }}>
                                <RightArrow />
                            </View>
                            <View style={{
                                backgroundColor: "#FF9963",
                                opacity: 0.1,
                                position: 'absolute',
                                top: 10,
                                right: 10,
                                zIndex: -1,
                                width: 50,
                                height: 50,
                                borderBottomRightRadius: 20
                            }} />
                        </View>
                    </TouchableOpacity>
                </View> : (
                    <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={to}>
                            <View style={{ height: 150 }}>
                                <View
                                    style={{
                                        width: 167,
                                        height: 60,
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: "#FF9963",
                                        borderBottomRightRadius: 20,
                                        zIndex: 1,

                                    }}>
                                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', marginHorizontal: 15 }}>Get Started</Text>
                                    <RightArrow />
                                </View>
                                <View style={{
                                    backgroundColor: "#FF9963",
                                    opacity: 0.1,
                                    position: 'absolute',
                                    top: 15,
                                    left: 15,
                                    zIndex: -1,
                                    width: 167,
                                    height: 60,
                                    borderBottomRightRadius: 20
                                }} />
                            </View>
                        </TouchableOpacity>
                    </View>
                )
            }
        </View>
    )
}

export default OnboardingView;