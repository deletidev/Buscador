import * as api from './api/api';
import { mapCharcterToVM } from './rick-detail.mapper';

export const getCharacter = (id: string) => {
  return api.catchCharacterApi(id).then(mapCharcterToVM);
};
