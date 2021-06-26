import { FC } from 'react';
import styled from 'styled-components';
import Links from './Links/Links';
import Profile from "./Profile/Profile";

const Wrapper = styled.div`
  width: 20rem;
  height: 32rem;
  display: flex;
  margin-left: 1rem;
  margin-top: 1.4rem;
  flex-direction: column;
  z-index: 1;
`;

const Left_Part: FC = () => {
    return( 
        <Wrapper>  
            <Profile/>
            <Links/>
        </Wrapper>
    );
};
export default Left_Part;
