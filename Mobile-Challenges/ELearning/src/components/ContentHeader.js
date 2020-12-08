import React from 'react';
import { ScrollView, View } from 'react-native';
import Avatar from '../Styled-Components/Avatar';
import StyledText from '../Styled-Components/Text';
import RightArrow from '../../assets/images/right-arrow.svg';

const ContentHeader = ({ text }) => (
    <View style={{ marginVertical: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <StyledText color={"#243C60"} fontSize={"18px"} fontWeight={"bold"}>
            {text}
        </StyledText>
        <RightArrow />
    </View>
)

export default ContentHeader;