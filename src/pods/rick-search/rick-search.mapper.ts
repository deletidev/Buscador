import * as Api from './api/api.model';
import * as Model from './rick-search.vm';

const mapCharacterFromApiToVm = (
  character: Api.CharactersApi
): Model.CharacterVm => ({
  id: character.id,
  name: character.name,
  image: character.image,
  status: character.status
});

export const mapCharactersListFromApiToVm = (
  data: Api.CharactersApi[]
): Model.CharacterVm[] =>
  data.map(character => mapCharacterFromApiToVm(character));
