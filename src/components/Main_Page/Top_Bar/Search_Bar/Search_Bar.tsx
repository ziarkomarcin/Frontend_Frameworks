import {FC} from 'react';
import styled from 'styled-components';
import {Colors} from '../../../../Styled_helpers/Colors';
import {FontSize} from '../../../../Styled_helpers/FontSize';


const Wrapper = styled.div`
position: relative;
width: 40%;
margin-top: 10px;
`;

const Input = styled.input`
width: 100%;
height: 40px;
border: 2px solid lightgrey;
text-align: center;
font-family: 'Courier New', monospace;
font-size: ${FontSize[18]};
`;

const SearchBarIcon = styled.button`
background: url('./icons/search.svg') no-repeat;
display: block;
margin: auto auto;
top:0;
bottom:0;
width: 25px;
right: 10px;
height: 25px;
border: none;
position: absolute;
background-size: cover;
outline: none;
:hover {
cursor: pointer;
}  
`;

const Search_Bar: FC = () => {
    return(

    <Wrapper>
        <Input placeholder="Search Legalcluster..."/>
        <SearchBarIcon/>
    </Wrapper>
    
    )
}

export default Search_Bar;