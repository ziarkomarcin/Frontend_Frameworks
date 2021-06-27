import {FC, useState} from "react";
import styled from "styled-components";
import { Colors } from "../../../../styled_helpers/Colors";
import { Font_Size } from "../../../../styled_helpers/Font_Size";

const Wrapper = styled.div`
  background-color: ${Colors.pastel};
  border-radius: .5rem;
  padding: 1rem;
  button{
    background-color: ${Colors.best_red};
    border:none;
    padding: .5rem;
    border-radius: .5rem;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const Title = styled.div`
  font-size: 1.5rem;
  color: ${Colors.best_red};
`;

const Main = styled.div`
  display: flex;
  gap: 10px;
`;

const Tab = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.white};
  padding: 1rem;
  border-radius: .5rem;
`;

const Tab_Ico = styled.div`
  text-align:center;
  margin-bottom: .5rem;
`;

const Tab_Title = styled.div`
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const Tab_Text = styled.div`
text-align: center;
`;

const Workspaces_MiniTab: FC = () => {
    const [hidden, setHidden] = useState<boolean>(false);
    const toggler = () => setHidden(!hidden);

    return (
        <Wrapper>
            <Header>
                <Title>Start working on corporate matters</Title>
                <button onClick={toggler}> {hidden ? 'Show' : 'Hide'}</button>
            </Header>
            {!hidden &&
                <Main>
                    <Tab>
                        <Tab_Ico><img src='./images/entity.png' /></Tab_Ico>
                        <Tab_Title>Explore your <strong>entities</strong></Tab_Title>
                        <Tab_Text>Take a few minutes to look at the most important elements and specificities of your entities</Tab_Text>
                    </Tab>
                    <Tab>
                        <Tab_Ico><img src='./images/structure.png' /></Tab_Ico>
                        <Tab_Title>Structure the <strong>ownership</strong></Tab_Title>
                        <Tab_Text>Get a clear view of the ownership by looking at the relations between individuals and entities.</Tab_Text>
                    </Tab>
                    <Tab>
                        <Tab_Ico><img src='./images/calendar.png' /></Tab_Ico>
                        <Tab_Title>Define your <strong>calendar</strong></Tab_Title>
                        <Tab_Text>Prepare future events by creating detailed plans around the life of your entity.</Tab_Text>
                    </Tab>
                </Main>
            }
        </Wrapper>
    );
}

export default Workspaces_MiniTab;
