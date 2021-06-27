import {FC} from "react";
import styled from "styled-components";
import { Colors } from "../../../../styled_helpers/Colors";
import { Font_Size } from "../../../../styled_helpers/Font_Size";

const Wrapper = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: ${Colors.pastel};
  margin-bottom: 1rem;
`;

const InnerWrapper = styled.div`
  display:flex;
  flex-direction: row;
`;

const Image = styled.div`
  background: url("./images/code1.jpg");
  background-size: cover;
  background-position-y: center;
  width:100%;
  height: 15rem;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 1.75rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  padding: .5rem;
`;

const Small_Text = styled.div`
  display: flex;
  align-items: center;
  padding: .5rem;
`;

const Workspaces_Main: FC = () => {
  return (
      <Wrapper>
          <Image/>
          <InnerWrapper>
              <img src="./icons/contract.jpg"/>
              <Description>
                  <ContentWrapper>
                      <Title>Client contract</Title>
                  </ContentWrapper>
                  <Small_Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ipsam pariatur fuga quam.
                  </Small_Text>
              </Description>
          </InnerWrapper>
      </Wrapper>
  );
}
export default Workspaces_Main;