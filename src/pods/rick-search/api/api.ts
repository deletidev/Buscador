import { DataApiCharacters } from './api.model';

export const catchCharactersListApi = async (
  value: string,
  page: number
): Promise<DataApiCharacters> => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}&name=${value}`
  );

  const data: DataApiCharacters = await response.json();
  return data;
};
