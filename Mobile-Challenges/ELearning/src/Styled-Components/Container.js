import { View } from 'react-native';
import styled from 'styled-components';

const Container = styled(View)`
    padding:${props => props.padding || "20px"};
`

export default Container;