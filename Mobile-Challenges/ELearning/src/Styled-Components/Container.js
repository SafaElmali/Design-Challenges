import { View } from 'react-native';
import styled from 'styled-components';

const Container = styled(View)`
    flex:1;
    padding:${props => props.padding || "20px"};
`

export default Container;