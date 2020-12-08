import React from 'react';
import { ScrollView, View } from 'react-native';
import ContentHeader from '../ContentHeader';
import Container from '../../../../Styled-Components/Container';
import RoundedCard from '../../../../Styled-Components/Card';
import JsSVG from '../../../../../assets/images/js.svg';
import ResponsiveSVG from '../../../../../assets/images/responsive.svg';
import PlaySVG from '../../../../../assets/images/play.svg';
import PlayBlueSVG from '../../../../../assets/images/play-blue.svg';
import StyledText from '../../../../Styled-Components/Text';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import * as Progress from 'react-native-progress';

const CourseList = _ => (
    <Container style={{ paddingBottom: 0 }}>
        <ContentHeader text={"Cursos en progreso (4)"} />
        <RoundedCard style={{ overflow: 'hidden' }} borderRadius={"10px"} margin={"5px 15px"} backgroundColor={"rgba(255, 204, 102,0.4)"} width={"330px"} height={"85px"}>
            <View style={{ flex: 1, flexDirection: 'row', padding: 20 }}>
                <JsSVG />
                <View style={{ marginHorizontal: 10, flexDirection: 'column', justifyContent: 'space-between' }}>
                    <StyledText fontWeight={"bold"} fontSize={"16px"}>
                        JavaScript Avanzado
                    </StyledText>
                    <StyledText fontSize={"12px"}>
                        4 Horas, 20 Minutos
                    </StyledText>
                </View>
                <View style={{ backgroundColor: '#fff', borderRadius: 100, width: 50, height: 50 }}>
                    <AnimatedCircularProgress
                        size={50}
                        width={2}
                        fill={60}
                        rotation={0}
                        tintColor="#FFCC66"
                        onAnimationComplete={() => console.log('onAnimationComplete')}
                        backgroundColor="#fff">
                        {
                            _ => (
                                <PlaySVG />
                            )
                        }
                    </AnimatedCircularProgress>
                </View>
                <View style={{ position: 'absolute', bottom: 0, left: 0 }}>
                    <Progress.Bar borderColor="#FFCC66" width={189} height={0} />
                </View>
            </View>
        </RoundedCard>
        <RoundedCard style={{ overflow: 'hidden' }} borderRadius={"10px"} margin={"5px 15px"} backgroundColor={"rgba(69, 238, 226,0.4)"} width={"329px"} height={"85px"}>
            <View style={{ flex: 1, flexDirection: 'row', padding: 20 }}>
                <ResponsiveSVG />
                <View style={{ marginHorizontal: 20, flexDirection: 'column', justifyContent: 'space-between' }}>
                    <StyledText fontWeight={"bold"} fontSize={"16px"}>
                        Responsive Design
                        </StyledText>
                    <StyledText fontSize={"12px"}>
                        2 Horas, 35 Minutos
                    </StyledText>
                </View>
                <View style={{ backgroundColor: '#fff', borderRadius: 100, width: 50, height: 50 }}>
                    <AnimatedCircularProgress
                        size={50}
                        width={2}
                        fill={75}
                        rotation={0}
                        tintColor="#45EEE2"
                        onAnimationComplete={() => console.log('onAnimationComplete')}
                        backgroundColor="#fff">
                        {
                            _ => (
                                <PlayBlueSVG />
                            )
                        }
                    </AnimatedCircularProgress>
                </View>
                <View style={{ position: 'absolute', bottom: 0, left: 0 }}>
                    <Progress.Bar borderColor="#45EEE2" width={268} height={0} />
                </View>
            </View>
        </RoundedCard>
    </Container>
)

export default CourseList;