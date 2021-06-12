import styled from "styled-components";
import {Colors} from "../../../../../Styled_helpers/Colors";

const Buttons = styled.a`
  img {
    max-width: 25px;
    height: 25xp;
    margin-right: 0;
  }
  background-color:${Colors.white};
        :hover {
          background-color:${Colors.dark};
  }  
  position: relative;
  display:flex;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
`;

export default Buttons;