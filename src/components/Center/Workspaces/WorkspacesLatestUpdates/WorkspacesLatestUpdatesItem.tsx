import {FC} from "react";
import styled from "styled-components";
import {IWorkspacesUpdate} from "../../../../interfaces/IWorkspaces-update";
import { Colors } from "../../../../styled_helpers/Colors";
import { Font_Size } from "../../../../styled_helpers/Font_Size";

const Wrapper = styled.div`
  background: ${Colors.pastel};
  border-radius: .5rem;
  padding: 1rem;
  margin-bottom: .5rem;
`;

const Title = styled.div`
  font-size: 1.5rem;
  margin-bottom: .5rem;
  color: ${Colors.eggplant};
`;

const Description = styled.div`
  font-size: 1rem;
  margin-bottom: .5rem;
`;

const Pub_Info = styled.div`
  margin-top: .5rem;
  display: flex;
  align-items: center;
  font-size: 0.75rem;
`;
const Company = styled.div``;
const Updated = styled.div``;

interface WorkspacesLatestUpdatesItemProps {
    update: IWorkspacesUpdate;
    className?: string;
}

const WorkspacesLatestUpdatesItem: FC<WorkspacesLatestUpdatesItemProps> = (props) => {
    return (
        <Wrapper >
            <Title >{props.update?.name}</Title>
            <Description >{props.update?.body}</Description>
            <Pub_Info >
                <Company>{props.update?.type}</Company>
                 • 
                <Updated>Updated 3 days ago by Glenna Reichert</Updated>
            </Pub_Info>
        </Wrapper>
    );
}

export default WorkspacesLatestUpdatesItem;
