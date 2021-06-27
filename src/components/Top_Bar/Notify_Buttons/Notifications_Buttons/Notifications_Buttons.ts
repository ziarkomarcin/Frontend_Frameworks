import styled from "styled-components";
import {Colors} from "../../../../styled_helpers/Colors";

const Notifications_Buttons = styled.a`
  img {
    max-width: 25px;
    height: 25xp;
    margin-right: 0;
  }
  background-color:${Colors.pastel};
        :hover {
          box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
          transform: scale(0.85);
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

export default Notifications_Buttons;