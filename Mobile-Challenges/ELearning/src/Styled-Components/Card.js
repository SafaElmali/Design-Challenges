import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';

const RoundedCard = styled(TouchableOpacity)`
    width:${props => props.width ? props.width : "157px"};
    height:${props => props.height ? props.height : "209px"};
    background-color:${props => props.backgroundColor ? props.backgroundColor : "#45EEE2"};
    border-radius:${props => props.borderRadius ? props.borderRadius : "17px"};
    margin:${props => props.margin ? props.margin : "0px 15px"};
`

export default RoundedCard;
