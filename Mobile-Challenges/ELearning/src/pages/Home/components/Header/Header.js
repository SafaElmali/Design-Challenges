import React from 'react';
import Container from '../../../../Styled-Components/Container';
import HeaderCourses from './HeaderCourses';
import HeaderUser from './HeaderUser';
import HeaderSearch from './HeaderSearch';
import { View } from 'react-native';

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