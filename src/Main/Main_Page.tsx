import {FC, useEffect} from 'react';
import styled from 'styled-components';
import Top_Bar from '../components/Top_Bar/Top_Bar';
import Left_Part from "../components/Left_Part/Left_Part";
import Center from '../components/Center/Center';
import {Colors} from "../styled_helpers/Colors";
import { getUsers } from '../api/usersAPI';
import { useDispatch } from "react-redux";
import { getLatestPublications } from "../actions/publicationsActions";
import { getWorks } from "../api/worksAPI";

const Wrapper = styled.section`
    background-color: ${Colors.salmon};
`;

const Content = styled.div`
    display:flex;
    max-width: 100%;
    min-height:1550px;
    height: auto;
    justify-content:center;
`;

const Main_Page: FC = () => {
    const dispatch = useDispatch();
    type GetUsers = ReturnType<typeof getUsers>;
    type GetLatestPublications = ReturnType<typeof getLatestPublications>;
    type GetWorks = ReturnType<typeof getWorks>;

    useEffect(() => {
        dispatch<GetUsers>(getUsers());
        dispatch<GetLatestPublications>(getLatestPublications());
        dispatch<GetWorks>(getWorks());
    });
    
    return ( 
        <Wrapper>
            <Top_Bar/>
            <Content>
                <Left_Part/>
                <Center/>
            </Content>
        </Wrapper>
    );
};

export default Main_Page;

