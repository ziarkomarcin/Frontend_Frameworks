import React, {FC, useEffect, useState} from "react";
import styled  from "styled-components";
import WorkspacesLatestUpdatesItem from "./WorkspacesLatestUpdatesItem";
import WorkspacesFilterButton from "./Workspaces_Filter";
import WorkspacesFilterButtons from "../../../../data/WorkspacesFilterButtons";
import {useSelector} from "react-redux";
import {IState} from "../../../../reducers";
import {IWorkspacesUpdatesReducer} from "../../../../reducers/workspacesUpdatesReducers";
import {Workspaces_Datum} from "./Workspaces_Datum/Workspaces_Datum";
import {IWorkspacesUpdate} from "../../../../interfaces/IWorkspaces-update";
import { Font_Size } from "../../../../styled_helpers/Font_Size";
import { Colors } from "../../../../styled_helpers/Colors";

const Wrapper = styled.div`
  margin-top: 30px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  h2{
    font-size: ${Font_Size[24]};
  }
`;

const Filters = styled.div`
  display: flex;
  align-items: center;
`;

const FilterButtons = styled(Filters)`
  margin-top: 8px;
  justify-content: space-between;
`;

const TitleFilter = styled.input`
  border: 1px solid ${Colors.lightGray};
  background: ${Colors.white} url("/icons/search.png") no-repeat;
  background-position-x: calc(100% - 10px);
  background-position-y: center;
  background-size: 14px 14px;
  padding: 5px 30px 5px 10px;
  width: 200px;
  color: ${Colors.gray};
`;

const Content = styled.div`
  margin-top: 14px;
`;

const WorkspacesLatestUpdates: FC = () => {
    const { workspacesUpdates } = useSelector<IState, IWorkspacesUpdatesReducer>(state => ({
        ...state.workspacesUpdates
    }));

    const workspacesUpdatesDataProvider = new Workspaces_Datum(workspacesUpdates);
    const [titleFilter, setTitleFilter] = useState('');
    const [workspacesUpdatesData, setWorkspacesUpdatesData] = useState<IWorkspacesUpdate[] | null>(() => workspacesUpdatesDataProvider.getFiltered());
  
    useEffect(() => {
      if (workspacesUpdatesData === null) {
          const wudp = new Workspaces_Datum(workspacesUpdates);
          setWorkspacesUpdatesData(wudp.getFiltered());
      }
    })

    const handleTitleFilterInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitleFilter(event.target.value);
        workspacesUpdatesDataProvider.titleFilter(event.target.value);
        setWorkspacesUpdatesData(workspacesUpdatesDataProvider.getFiltered());
    }
    const handleButtonFilterClick = (event: React.MouseEvent, typeName: string) => {
        workspacesUpdatesDataProvider.typeFilter(typeName);
        setWorkspacesUpdatesData(workspacesUpdatesDataProvider.getFiltered());
    }

    return (
        <Wrapper>
            <Header>
                <h2>Latest updates</h2>
                <Filters>
                    <TitleFilter onInput={handleTitleFilterInput} placeholder='Search...' />
                </Filters>
            </Header>
            <FilterButtons>
                {WorkspacesFilterButtons.map(button => (
                    <WorkspacesFilterButton name={button.name} color={button.color} iconName={button.iconName} onClick={handleButtonFilterClick} />
                ))}
            </FilterButtons>
            <Content>
                {workspacesUpdatesData?.slice((4 * 1), 4 * 3).map(entry => {
                    return (
                        <WorkspacesLatestUpdatesItem key={entry.id} update={entry} />
                    )
                })}
            </Content>
        </Wrapper>
    );
}
export default WorkspacesLatestUpdates;