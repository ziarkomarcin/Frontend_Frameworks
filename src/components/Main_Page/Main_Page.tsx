import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from '../../Styled_helpers/Colors';

import Top_Bar from './Top_Bar/Top_Bar';
import Left_Menu from "./Left_Menu/Left_Menu";
import Content_Box from './Content_Box/Content_Box';

const Wrapper = styled.div`
height: auto;
background-color: ${Colors.dark};
`;

const Container = styled.div`
    max-width: 100%;
    height:1650px;
    display:flex;
    justify-content:center;
`;

const Main_Page: FC = () => {
    return(
        <Wrapper>
            <Top_Bar/>
            <Container>
                <Left_Menu/>
                <Content_Box/>
            </Container>        
        </Wrapper>
    )
}

export default Main_Page;