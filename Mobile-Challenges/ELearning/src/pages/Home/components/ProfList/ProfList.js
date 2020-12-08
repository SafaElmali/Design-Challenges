import React from 'react';
import { ScrollView, View } from 'react-native';
import Avatar from '../../../../Styled-Components/Avatar';
import StyledText from '../../../../Styled-Components/Text';
import ProfOneSVG from '../../../../../assets/images/prof-1.svg';
import ProfTwoSVG from '../../../../../assets/images/prof-2.svg';
import ProfThreeSVG from '../../../../../assets/images/prof-3.svg';
import ProfFourSVG from '../../../../../assets/images/prof-4.svg';
import ContentHeader from '../ContentHeader';
import Container from '../../../../Styled-Components/Container';

const ProfList = _ => (
    <Container>
        <ContentHeader text={"Profesor del Mes"} />
        <ScrollView horizontal>
            <View style={{ flexDirection: 'row' }}>
                <Avatar backgroundColor={"#FFD5CD"}>
                    <ProfOneSVG />
                </Avatar>
                <Avatar backgroundColor={"#EFBBCF"}>
                    <ProfTwoSVG />
                </Avatar>
                <Avatar backgroundColor={"#C3AED6"}>
                    <ProfThreeSVG />
                </Avatar>
                <Avatar backgroundColor={"#8675A9"}>
                    <ProfFourSVG />
                </Avatar>
            </View>
        </ScrollView>
    </Container>
)

export default ProfList;