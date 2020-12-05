import React from 'react';
import RoundedCard from '../Styled-Components/Card';
import StyledText from '../Styled-Components/Text';
import { View } from 'react-native';
import BackendSVG from '../../assets/images/backend.svg';
import FrontendSVG from '../../assets/images/frontend.svg';

const Header = (props) => (
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
        <RoundedCard backgroundColor={"#7EEEAE"}>
            <View style={{ padding: 10 }}>
                <StyledText color={"#243C60"} fontSize={"24px"} fontWeight={"600"}>Backend</StyledText>
                <StyledText color={"#243C60"}>12 Cursos</StyledText>
            </View>
            <View style={{ flex: 1, overflow: 'hidden' }}>
                <BackendSVG style={{ position: 'absolute', left: -50, bottom: -40 }} />
            </View>
        </RoundedCard>
        <RoundedCard backgroundColor={"#FFEAA4"}>
            <View style={{ padding: 10 }}>
                <StyledText color={"#243C60"} fontSize={"24px"} fontWeight={"600"}>Frontend</StyledText>
                <StyledText color={"#243C60"}>17 Cursos</StyledText>
            </View>
            <View style={{ flex: 1, overflow: 'hidden' }}>
                <FrontendSVG style={{ position: 'absolute', left: -50, bottom: -40 }} />
            </View>
        </RoundedCard>
    </View>
)

export default Header;