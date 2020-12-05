import { Text } from 'react-native';
import styled from 'styled-components';

const StyledText = styled(Text)`
    color:${props => props.color ? props.color : "#243C60"};
    font-size:${props => props.fontSize ? props.fontSize : "14px"};
    font-weight:${props => props.fontWeight ? props.fontWeight : "normal"};;
    margin:2px 0px;
`

export default StyledText;

