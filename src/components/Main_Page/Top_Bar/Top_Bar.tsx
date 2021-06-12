import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from '../../../Styled_helpers/Colors';
import Search_Bar from './Search_Bar/Search_Bar';
import Dropdown_Menu from './Dropdown_Menu/Dropdown_Menu';
import Notifications from './Notifications/Notifications';


const Wrapper = styled.div`
    width: 100%;
    background:${Colors.grey};
    font-family: 'Courier New', monospace;
    height: 70px;
    box-shadow: 1px 1px 12px ${Colors.black};
    display: flex;
    align-items: flex-start;
    z-index: 2;

`;

const Logo = styled.div`
        img{
            height: 70px;
            width:auto;
        }
`;

const Top_Bar: FC = () => {
    return(

    <Wrapper>
        <Logo>
            <img src="./logo192.png" alt="logo"></img>
        </Logo>
        <Dropdown_Menu/>
        <Search_Bar/>
        <Notifications/>
    </Wrapper>
    
    )
}

export default Top_Bar;