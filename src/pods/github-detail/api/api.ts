import { MemberApi } from './api.model';

export const catchMemberApi = (login: string): Promise<MemberApi> => {
  return fetch(`https://api.github.com/users/${login}`)
    .then(response => response.json())
    .catch(error => console.log(error));
};
