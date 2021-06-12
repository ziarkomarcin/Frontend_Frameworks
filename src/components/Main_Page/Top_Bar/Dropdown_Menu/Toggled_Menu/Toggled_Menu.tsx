import { FC } from "react";
import styled from "styled-components";
 import {FontSize} from "../../../../../Styled_helpers/FontSize";

const Wrapper = styled.div`
    width:310px;
    height:400px;
    background-color:lightgray;
    border:1px solid gray;
    font-family: 'Courier New', monospace;
    font-size: ${FontSize[18]};
`;


const Toggled_Menu: FC = () => {
	return (
            <Wrapper>
                <p>Something</p>
                <p>to</p>
                <p>see</p>
            </Wrapper>
	)
}

export default Toggled_Menu;