import {FC} from 'react';
import styled from 'styled-components';
import Good_Slider from './Slider/Slider';
import Latest  from './Latest/Latest';
import Pagination_Block from './ResumeYourWork/Pagination_Block';
import Workspaces from './Workspaces/Workspaces';
import Entities from './Entities/Entities';
import Profile from './Profile/Profile';

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

const Wrapper = styled.div`
    width: 70%;
    height: 1000px;
    margin-left: 60px;
    margin-right: 80px;
    margin-top: 20px;
    font-family: 'Raleway';
    span{
        font-weight: 500;
        font-size: 2rem;
        margin-left:15px;
    }
`;

const Center: FC = () => {
    return ( 
        <Wrapper>
            <Router>
                 <Switch>

                    <Route exact path="/">
                        <Latest/>
                        <span>Workspaces</span>
                        <Good_Slider/>
                        <span>Resume your work</span>
                        <Pagination_Block/>
                    </Route>
                   
                    <Route path="/workspace">
                        <Workspaces/>
                    </Route>

                     <Route path="/profile">
                        <Profile/>
                    </Route>
                    
                    <Route path="/entities">
                        <Entities/>
                    </Route>


                    <Route path="/publication">
                        404
                    </Route>
                    <Route path="/people">
                        404
                    </Route>
                    <Route path="/administration">
                        404
                    </Route>
                    <Route path="/client_contract">
                        404
                    </Route>
                    <Route path="/supplier_contract">
                        404
                    </Route>
                    <Route path="/corporate">
                        404
                    </Route>
                    <Route path="/group_norms">
                        404
                    </Route>
                    <Route path="/real_estate_contracts">
                        404
                    </Route>
                </Switch>    
            </Router>
        </Wrapper>
    );
};
export default Center;