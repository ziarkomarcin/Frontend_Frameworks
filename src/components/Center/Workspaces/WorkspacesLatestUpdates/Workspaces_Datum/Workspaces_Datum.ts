import {IWorkspacesUpdate} from "../../../../../interfaces/IWorkspaces-update";

export class Workspaces_Datum {
    private readonly dataSet: IWorkspacesUpdate[] | null;
    private static titleFilter?: string;
    private static typeFilter: string = 'All';

    constructor(works: IWorkspacesUpdate[] | null) {
        this.dataSet = works;
    }

    titleFilter(title: string) {
        Workspaces_Datum.titleFilter = title;
    }
  
    typeFilter(typeFilter: string) {
        if (typeFilter !== '...') {
            Workspaces_Datum.typeFilter = typeFilter;
        }
    }

    getFiltered(): IWorkspacesUpdate[] | null {
        let result = this.dataSet;

        if (result === null) return null;

        if (Workspaces_Datum.titleFilter) {
            result = result.filter(entry => entry.name.toLowerCase().includes(Workspaces_Datum.titleFilter?.toLowerCase() ?? ''));
        }

        if (Workspaces_Datum.typeFilter != 'All' && Workspaces_Datum.typeFilter != '') {
            result = result.filter(entry => entry.type.toLowerCase() == Workspaces_Datum.typeFilter.toLowerCase());
        }
        return [...result];
    }
}
