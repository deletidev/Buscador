import * as api from './api/api';
import { mapMemberToVM } from './github-detail.mappers';

export const getMember = (login: string) => {
  return api.catchMemberApi(login).then(mapMemberToVM);
};
