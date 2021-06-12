import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from "../../../../Styled_helpers/Colors";
import { FontSize } from '../../../../Styled_helpers/FontSize';
import Box  from './../Box/Box';

const Wrapper = styled.div`
    background-color: ${Colors.grey};
    color: ${Colors.white};
    width: 1400px;
    height:200px;
    margin-top: 15px;
    border-radius:10px;
    font-family:'Courier New', monospace;
    font-size: ${FontSize[22]};
    p{
        margin-left: 10px;
        padding-top: 10px;
    }
`;


const Slider: FC = () => {
    return ( 
        <Wrapper> 
            <p>Slider</p>
        </Wrapper>
    );
};
export default Slider;