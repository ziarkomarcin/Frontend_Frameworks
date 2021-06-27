import { FC } from 'react';
import styled from 'styled-components';
import Search_Bar from './Search_Bar/Search_Bar';
import {Colors} from "../../styled_helpers/Colors";
import Notify from "./Notify_Buttons/Notify_Buttons";
import Drop_Down_Menu from "./Drop_Down_Menu/Drop_Down_Menu";

const Wrapper = styled.div`
  width: 100%;
  background:${Colors.eggplant};
  height: auto;
  box-shadow: 0 8px 6px -6px ${Colors.best_dark};
  display: flex;
  align-items: flex-start;
  z-index: 3;
`;
const Image = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  height: 50px;
  width: 60px;
  margin-top: auto;
  margin-bottom: auto;
`;

const Top_Bar: FC = () => {
    return( 
        <Wrapper>
            <Image>
                <img src='./logo.png' alt='Image'/>
            </Image>
            <Drop_Down_Menu />
            <Search_Bar />
            <Notify />
        </Wrapper>
    );
};
export default Top_Bar;
 