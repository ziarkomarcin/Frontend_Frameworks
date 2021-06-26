import styled from "styled-components";
import {Colors} from "../../../styled_helpers/Colors";
import {Font_Size} from "../../../styled_helpers/Font_Size";
import Notifications_Buttons from "./Notifications_Buttons/Notifications_Buttons";

function Notify() {

  const Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;  
    width: 30%;
    display: flex;
    justify-content:flex-end;
  `;

  const Notify_Button = styled(Notifications_Buttons)`
    margin-right: 10px;

    :hover {
          box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
          transform: scale(0.85);
    }
  `;

  const Info_Cyrcle = styled.div`
    width: 20px;
    height: 20px;
    top: -7px;
    right: -3px;
    border-radius: 50%;
    background-color: ${Colors.best_dark};
    color: ${Colors.white};
    font-size: ${Font_Size[16]};
    position: absolute;
    line-height: normal;
    text-align: center;
    font-family:Tahoma;
  `;

  return (
      <Wrapper>
          <Notifications_Buttons href="/">
              <img src="./icons/house.png" alt="Home page"/>
          </Notifications_Buttons>

          <Notify_Button href="/comments">
              <img src="./icons/comments.png" alt="Comments"/>
              <Info_Cyrcle>6</Info_Cyrcle>
          </Notify_Button>

          <Notify_Button href="/notifications">
              <img src="./icons/bell.png" alt="Notifications"/>
              <Info_Cyrcle>2</Info_Cyrcle>
          </Notify_Button>
      </Wrapper>
  );
}
export default Notify;