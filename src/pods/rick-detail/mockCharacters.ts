import { CharacterVm } from './rick-detail.vm';

export const characterMock: CharacterVm = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Unknown',
  species: 'Human',
  gender: 'Male',
  type: '',
  origin: {
    name: 'Earth (C-137)'
  },
  location: {
    name: 'Citadel of Ricks'
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  created: '2017-11-04T18:48:46.250Z'
};
