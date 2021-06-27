import {IPublication} from "../interfaces/IPublication";
export const GET_LATEST_PUBLICATIONS = 'GET_LATEST_PUBLICATIONS';

export interface IPublicationTypes {
    GET_LATEST_PUBLICATIONS: {
        latestPublications: IPublication[]
    }
}