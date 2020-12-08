import { View } from 'react-native';
import styled from 'styled-components';

const Search = styled(View)`
    width:${props => props.width ? props.width : '329px'}
    height:${props => props.height ? props.height : '55px'};
    backgroundColor:#fff;
`

export default Search;