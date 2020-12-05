import React from 'react';
import { ScrollView, View } from 'react-native';
import ContentHeader from '../ContentHeader';
import Container from '../../Styled-Components/Container';
import RoundedCard from '../../Styled-Components/Card';
import JsSVG from '../../../assets/images/js.svg';
import ResponsiveSVG from '../../../assets/images/responsive.svg';
import StyledText from '../../Styled-Components/Text';

const CourseList = _ => (
    <Container>
        <ContentHeader text={"Cursos en progreso (4)"} />
        <RoundedCard margin={"5px 15px"} backgroundColor={"rgba(255, 204, 102,0.4)"} width={"329px"} height={"85px"}>
            <View style={{ flex: 1, flexDirection: 'row', padding: 20 }}>
                <JsSVG />
                <View style={{ marginHorizontal: 10, flexDirection: 'column', justifyContent: 'space-between' }}>
                    <StyledText fontWeight={"bold"} fontSize={"16px"}>
                        JavaScript Avanzado
                    </StyledText>
                    <StyledText fontSize={"12px"}>
                        4 Horas, 20 Minutos
                    </StyledText>
                    <View></View>
                </View>
            </View>
        </RoundedCard>
        <RoundedCard margin={"5px 15px"} backgroundColor={"rgba(69, 238, 226,0.4)"} width={"329px"} height={"85px"}>
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
                <View></View>
            </View>
        </RoundedCard>
    </Container>
)

export default CourseList;