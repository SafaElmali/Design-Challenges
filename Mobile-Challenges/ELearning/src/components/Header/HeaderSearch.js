import React from 'react';
import { View, TextInput } from "react-native";
import Search from '../../Styled-Components/Search.js';
import SearchSVG from '../../../assets/images/search.svg';
import DownArrowSVG from '../../../assets/images/down-arrow.svg';

const HeaderSearch = () => (
    <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>
        <Search style={{ borderRadius: 10, alignItems: 'center', flexDirection: 'row', paddingHorizontal: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 10 }}>
                <SearchSVG />
                <TextInput placeholderTextColor={"#000"} placeholder={"Buscar"} style={{ marginLeft: 10, fontSize: 18, width: '80%', height: 40 }} />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                <View style={{ marginRight: 10, width: 2, height: 30, backgroundColor: 'lightgray' }}></View>
                <DownArrowSVG />
            </View>
        </Search>
    </View>
)

export default HeaderSearch;