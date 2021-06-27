import {IWorkspacesUpdate} from "../interfaces/IWorkspaces-update";

export const GET_WORKSPACES_UPDATES = 'GET_WORKSPACES_UPDATES';

export interface IWorkTypes {
    GET_WORKSPACES_UPDATES: {
        workspacesUpdates: IWorkspacesUpdate[]
    }
}