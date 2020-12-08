import React from 'react';
import Container from '../../Styled-Components/Container';
import HeaderCourses from './HeaderCourses';
import { View, TextInput } from 'react-native';
import Search from '../../Styled-Components/Search';
import SearchSVG from '../../../assets/images/search.svg';
import DownArrowSVG from '../../../assets/images/down-arrow.svg';
import StyledText from "../../Styled-Components/Text";
import ProfFourSVG from '../../../assets/images/prof-4.svg';
import Avatar from '../../Styled-Components/Avatar';
import HeaderUser from './HeaderUser';
import HeaderSearch from './HeaderSearch';

const Header = (props) => (
    <View style={{ flex: 1, position: 'relative' }}>
        <Container style={{ flex: 1 }}>
            <HeaderUser />
            <HeaderSearch />
            <HeaderCourses />
        </Container>
    </View>
)

export default Header;