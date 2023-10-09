import { CharacterApi } from './api/api.model';
import { CharacterVm } from './rick-detail.vm';

export const mapCharcterToVM = (data: CharacterApi): CharacterVm => ({
  id: data.id,
  name: data.name,
  status: data.status,
  species: data.species,
  gender: data.gender,
  type: data.type,
  origin: {
    name: data.origin.name
  },
  location: {
    name: data.location.name
  },
  image: data.image,
  created: data.created
});
