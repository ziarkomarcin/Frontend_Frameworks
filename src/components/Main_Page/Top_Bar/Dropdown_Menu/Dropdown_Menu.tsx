import { FC } from "react";
import useDropdown from 'react-dropdown-hook';
import styled from "styled-components";
import {FontSize} from "../../../../Styled_helpers/FontSize";
import Toggled_Menu from "./Toggled_Menu/Toggled_Menu";

const Wrapper = styled.div`
    width:15%;
    margin-right:8%;
    height:50px;
    margin-top:0.4%;
    z-index: 2;
`;

const ToggleMenu = styled.div`
    width:320px;
    height:50px;
    display: flex;
`;

const Icon = styled.div`
    margin-left: 1.5rem;
    width:15%;
    height:100%;
    img {
        width: 100%;
        height: 100%;
    }
    :hover {
        cursor: pointer;
    }
`;

const Text = styled.div`
    width:70%;
    height: 100%;
    align-items: center;
    padding-left:5%;
    display:flex;
    font-family: 'Courier New', monospace;
    font-weight: bold;
`;

const Arrow = styled.div`
    width:15%;
    height:100%;
    img {
        width: 50%;
        height: 100%;
        left:0;
        :hover {
            cursor: pointer;
        }  
    }
`;

 const DropDownMenu: FC = () => {
	const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();
	return (
        <Wrapper ref={wrapperRef}>
            <ToggleMenu onClick={toggleDropdown}>
                <Icon>               
                     <img src='./icons/house2.svg' alt="Home page" />
                </Icon>
                <Text>
                    Home
                </Text>
                <Arrow>
                    <img src='./icons/arrow-down.svg' alt="Drop down menu arrow"></img>
                </Arrow>
            </ToggleMenu>
            {dropdownOpen &&
                <>
                    <Toggled_Menu/>
                </> 
            }
        </Wrapper>
	)
}
export default DropDownMenu;