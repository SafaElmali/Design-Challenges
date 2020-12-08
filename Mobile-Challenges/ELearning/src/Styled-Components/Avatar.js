import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';

const Avatar = styled(TouchableOpacity)`
    width:${props => props.width ? props.width : "85px"};
    height:${props => props.height ? props.height : "85px"};
    border-radius:${props => props.borderRadius ? props.borderRadius : "10px"};
    background-color:${props => props.backgroundColor ? props.backgroundColor : "#45EEE2"};
    display:flex;
    justify-content:center;
    align-items:center;
    margin:0px 12px;
`

export default Avatar;