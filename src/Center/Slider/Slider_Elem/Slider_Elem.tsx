import {FC} from "react";
import styled from "styled-components";
import {IWorkspace} from "../../../../interfaces/IWorkspace";
import {Colors} from "../../../../styled_helpers/Colors";
import { Font_Size } from '../../../../styled_helpers/Font_Size';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  width: 25rem;
  height:15rem; 
  flex-direction: column;
  background-color: ${Colors.pastel};
  position: relative;
  font-family: 'Raleway';
  `;

const Banner_Image = styled.div`
  position:absolute;
  width: 100%;
  height: 5rem;
  background: url(${(props: {bannerUrl: string}) => props.bannerUrl}) no-repeat;
  background-size: cover;
`;


const Big_Img = styled.img`
  width:90px;
  height:90px;
  position:absolute;
  border: 1px solid ${Colors.gray};
  margin-left: .5rem;
  margin-top: 3rem;
  border-radius: 10px;
  background-color: ${Colors.white};
`;

const Title = styled.div`
  position:absolute;
  margin-top:90px;
  margin-left: 120px;
  font-size: ${Font_Size[24]};
`;

const Information = styled.div`
  display: flex;
  position:absolute;
  flex-direction: column;
  margin-top: 150px;
  margin-left:14px;
`;

const Data = styled.div`
  display: flex;
  align-items: center;
  font-size: ${Font_Size[16]};
`;

const LastUpdated = styled.div`
  margin-left:5px;
`;

const Ico = styled.img`
  width: 30px;
  height:30px;
`;

interface ISlider_Elem {
  className?: string;
  workspaceData: IWorkspace;
}

const Window: FC<ISlider_Elem> = (props) => {
    const workspace_href = () => {
        window.location.href = `/workspace`;
    }

    return (
        <Wrapper onClick={workspace_href}>
          <Banner_Image bannerUrl={props.workspaceData.bannerUrl}/>
          <Big_Img src={`./icons/${props.workspaceData.icon}.jpg`} />
          <Title>{props.workspaceData.title}</Title>
          <Information>
              <Data>
                  <Ico src={`./icons/${props.workspaceData.icon}.jpg`} />
                  {props.workspaceData.type} • 
                  <img src='./icons/people.png'/>
                  {props.workspaceData.users} users
              </Data>
              <LastUpdated>
                  Last update {props.workspaceData.lastUpdated}
              </LastUpdated>
          </Information>
      </Wrapper>
    );
}
export default Window;
