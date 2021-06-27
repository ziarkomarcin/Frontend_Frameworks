import {FC,useEffect} from "react";
import styled from "styled-components";
import Workspaces_Main from "./Workspaces_Main/Workspaces_Main";
import Workspaces_MiniTab from "./Workspaces_MiniTab/Workspaces_MiniTab"
import WorkspacesLatestUpdates from "./WorkspacesLatestUpdates/WorkspacesLatestUpdates";
import {useDispatch} from "react-redux";
import {getWorkspacesUpdates} from "../../../api/workspacesAPI";

const Wrapper = styled.div``;

const Workspaces: FC = () => {
    const dispatch = useDispatch();

    type GetWorkspacesUpdates = ReturnType<typeof getWorkspacesUpdates>;

    useEffect(() => {
        dispatch<GetWorkspacesUpdates>(getWorkspacesUpdates());
    });

    return (
        <Wrapper>
            <Workspaces_Main/>
            <Workspaces_MiniTab/>
            <WorkspacesLatestUpdates/>
        </Wrapper>
    );
}
export default Workspaces;

