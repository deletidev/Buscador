import { MemberApi } from './api.model';

interface Data {
  linkHeader: string;
  data: MemberApi[];
}
export const catchMembersApi = async (
  value: string,
  page: number
): Promise<Data> => {
  const response = await fetch(
    `https://api.github.com/orgs/${value}/members?page=${page}`
  );

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('Petición incorrecta: ' + response.statusText);
    }
  }

  const linkHeader = response.headers.get('Link');

  const data: MemberApi[] = await response.json();
  return { linkHeader, data };
};
