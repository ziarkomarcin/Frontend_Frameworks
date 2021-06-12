import styled from "styled-components";
import {Colors} from "../../../../Styled_helpers/Colors";
import {FontSize} from "../../../../Styled_helpers/FontSize";
import Buttons from "./Buttons/Buttons";

function Notifications() {

  const Wrapper = styled.div`
    align-items: center;
    margin-top: 12px;  
    width: 28%;
    display: flex;
    justify-content: right;
    margin-right: 10px;
  `;

  const NotifyIcon = styled(Buttons)`
    margin-right: 10px;
  `;

  const NotifyBadge = styled.div`
    width: 20px;
    height: 20px;
    top: -5px;
    right: -5px;
    border-radius: 50%;
    background-color: ${Colors.red};
    color: ${Colors.white};
    font-size: ${FontSize[16]};
    position: absolute;
    font-weight: bold;
    line-height: 1.35;
    text-align: center;
    font-family: 'Courier New', monospace;
  `;

  return (
      <Wrapper>
            <NotifyIcon href="/">
              <img src="./icons/house.png" alt="Home Page"/>
            </NotifyIcon>

            <NotifyIcon href="/comments">
              <img src="./icons/comments.png" alt="Comments"/>
              <NotifyBadge>6</NotifyBadge>
            </NotifyIcon>

            <NotifyIcon href="/notifications">
              <img src="./icons/bell.png" alt="Notifications"/>
              <NotifyBadge>2</NotifyBadge>
           </NotifyIcon>
      </Wrapper>
  );
}
export default Notifications;