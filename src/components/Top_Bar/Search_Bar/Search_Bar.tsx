import {FC} from 'react';
import styled from 'styled-components';
import {Font_Size} from "../../../styled_helpers/Font_Size";

const Wrapper = styled.fieldset`
  position: relative;
  width: 40%;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Search = styled.input`
  width: 100%;
  height: 40px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  text-align: center;
  font-family: 'Raleway';
  font-size: ${Font_Size[22]};
  border-radius: 10px;
  outline: none;
`;

const Search_Ico = styled.button`
  background: url('./icons/search.svg') no-repeat;
  display: block;
  margin: auto;
  top:0;
  bottom:0;
  width: 30px;
  right: 5px;
  height: 30px;
  border: none;
  position: absolute;
  background-size: cover;
  outline: none;
  :hover {
    cursor: pointer;
  }  
`;

const Search_Bar: FC = () => {
    return (
        <>
            <Wrapper>
                <Search placeholder='Search Legalcluster...' />
                <Search_Ico />
            </Wrapper>
        </>
    );
};

export default Search_Bar;
