import { FC } from "react";
import useDropdown from 'react-dropdown-hook';
import styled from "styled-components";
import {Font_Size} from "../../../styled_helpers/Font_Size";
import Toggle_Menu from "./Toggle_Menu/Toggle_Menu";

const Wrapper = styled.div`
    width:15%;
    margin-right:8%;
    height:50px;
    margin-top:0.4%;
    z-index: 2;
`;

const Toggler = styled.div`
    width:320px;
    height:50px;
    display: flex;
`;

const Icon = styled.div`
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

const Home = styled.div`
    width:70%;
    height: 100%;
    font-size: ${Font_Size[20]};
    align-items: center;
    padding-left:5%;
    display:flex;
    font-family: 'Raleway';
    font-weight: 100;

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

 const Drop_Down_Menu: FC = () => {
	const [wrapperRef, dropdownOpen, toggleDropdown] = useDropdown();
	return (
        <Wrapper ref={wrapperRef}  >
            <Toggler onClick={toggleDropdown} className='zxcz'>
                <Icon>               
                     <img src='./icons/house2.svg' alt="Home page" />
                </Icon>
                <Home>
                    Home
                </Home>
                <Arrow>
                    <img src='./icons/arrow-down.svg' alt="Drop down menu arrow"></img>
                </Arrow>
            </Toggler>
            {dropdownOpen &&
                <>
                    <Toggle_Menu/>
                </> 
            }
        </Wrapper>
	)
}
export default Drop_Down_Menu;
