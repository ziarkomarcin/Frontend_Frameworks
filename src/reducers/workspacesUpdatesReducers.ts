import * as actionTypes from '../actions/workspacesUpdateTypes';
import {IWorkspacesUpdate} from "../interfaces/IWorkspaces-update";

export interface IWorkspacesUpdatesReducer {
    workspacesUpdates: IWorkspacesUpdate[] | null;
}

const defaultState = (): IWorkspacesUpdatesReducer => ({
    workspacesUpdates: null,
});

export default (state = defaultState(), action: any) => {
    switch (action.type) {
        case actionTypes.GET_WORKSPACES_UPDATES: {
            const data: actionTypes.IWorkTypes['GET_WORKSPACES_UPDATES'] = action;
            return {
                ...state,
                workspacesUpdates: data.workspacesUpdates
            }
        }

        default: {
            return state;
        }
    }
}

