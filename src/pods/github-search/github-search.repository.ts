import * as api from './api/api';
import { mapMemberListToVM } from './github-search.mappers';

//no en uso
export const getMembers = (value: string, page: number) =>
  api
    .catchMembersApi(value, page)
    .then(result => mapMemberListToVM(result.data));
