import React from 'react';
import { View } from "react-native"
import Container from "../../../../Styled-Components/Container"
import StyledText from "../../../../Styled-Components/Text";
import ProfFourSVG from '../../../../../assets/images/prof-4.svg';
import Avatar from '../../../../Styled-Components/Avatar';

const HeaderUser = () => (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Container style={{ marginVertical: 10 }}>
            <StyledText margin={"10px 0px"} color={"#ccc"} fontSize={"18px"}>Bienvenido,</StyledText>
            <StyledText color={"#fff"} fontSize={"26px"} fontWeight={"bold"} >Nestor Jerez</StyledText>
        </Container>
        <Avatar backgroundColor={"#45EEE2"} borderRadius={"100px"} style={{ overflow: 'hidden', width: 65, height: 65 }}>
            <View style={{ position: 'absolute', bottom: -5 }}>
                <ProfFourSVG />
            </View>
        </Avatar>
    </View>
)

export default HeaderUser;