import { MemberApi } from './api.model';

interface Data {
  linkHeader?: string;
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
      throw new Error('No existe una compañia con el nombre ' + value);
    }
    if (response.status === 403) {
      throw new Error(
        'Se ha excedido el límite de búsquedas en la Api, vuelva a intentarlo más tarde'
      );
    }
    throw new Error('Se ha producido un error, vuelva a intentarlo más tarde');
  }

  const linkHeader = response.headers.get('Link');
  const data: MemberApi[] = await response.json();
  console.log(page);
  console.log(value);
  console.log(data);
  if (!linkHeader) {
    return { linkHeader: undefined, data };
  }
  return { linkHeader, data };
};
