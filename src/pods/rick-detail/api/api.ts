import { CharacterApi } from './api.model';

export const catchCharacterApi = (id: string): Promise<CharacterApi> => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.json())
    .catch(error => console.log(error));
};
