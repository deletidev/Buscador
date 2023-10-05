import { CharacterVm } from './rick-search.vm';

export const charactersMock: CharacterVm[] = [
  {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  },
  {
    id: 2,
    name: 'Morty Smith',
    status: 'Alive',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
  },
  {
    id: 3,
    name: 'Summer Smith',
    status: 'Alive',
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
  },
  {
    id: 4,
    name: 'Beth Smith',
    status: 'Alive',
    image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg'
  },
  {
    id: 5,
    name: 'Jerry Smith',
    status: 'Alive',
    image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg'
  },
  {
    id: 6,
    name: 'Abadango Cluster Princess',
    status: 'Alive',
    image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg'
  },
  {
    id: 7,
    name: 'Abradolf Lincler',
    status: 'unknown',
    image: 'https://rickandmortyapi.com/api/character/avatar/7.jpeg'
  },
  {
    id: 8,
    name: 'Adjudicator Rick',
    status: 'Dead',
    image: 'https://rickandmortyapi.com/api/character/avatar/8.jpeg'
  },
  {
    id: 9,
    name: 'Agency Director',
    status: 'Dead',
    image: 'https://rickandmortyapi.com/api/character/avatar/9.jpeg'
  }
];

const charactersApi = [
  {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1'
    },
    location: {
      name: 'Citadel of Ricks',
      url: 'https://rickandmortyapi.com/api/location/3'
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    episode: [
      'https://rickandmortyapi.com/api/episode/1',
      'https://rickandmortyapi.com/api/episode/2',
      'https://rickandmortyapi.com/api/episode/3'
    ],
    url: 'https://rickandmortyapi.com/api/character/1',
    created: '2017-11-04T18:48:46.250Z'
  },
  {
    id: 2,
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: { name: 'unknown', url: '' },
    location: {
      name: 'Citadel of Ricks',
      url: 'https://rickandmortyapi.com/api/location/3'
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    episode: [
      'https://rickandmortyapi.com/api/episode/1',
      'https://rickandmortyapi.com/api/episode/2'
    ],
    url: 'https://rickandmortyapi.com/api/character/2',
    created: '2017-11-04T18:50:21.651Z'
  },
  {
    id: 3,
    name: 'Summer Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Female',
    origin: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20'
    },
    location: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20'
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    episode: [
      'https://rickandmortyapi.com/api/episode/6',
      'https://rickandmortyapi.com/api/episode/7'
    ],
    url: 'https://rickandmortyapi.com/api/character/3',
    created: '2017-11-04T19:09:56.428Z'
  },
  {
    id: 4,
    name: 'Beth Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Female',
    origin: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20'
    },
    location: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20'
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
    episode: [
      'https://rickandmortyapi.com/api/episode/6',
      'https://rickandmortyapi.com/api/episode/7',
      'https://rickandmortyapi.com/api/episode/8'
    ],
    url: 'https://rickandmortyapi.com/api/character/4',
    created: '2017-11-04T19:22:43.665Z'
  },
  {
    id: 5,
    name: 'Jerry Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20'
    },
    location: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20'
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg',
    episode: [
      'https://rickandmortyapi.com/api/episode/6',
      'https://rickandmortyapi.com/api/episode/7',
      'https://rickandmortyapi.com/api/episode/8',
      'https://rickandmortyapi.com/api/episode/9'
    ],
    url: 'https://rickandmortyapi.com/api/character/5',
    created: '2017-11-04T19:26:56.301Z'
  },
  {
    id: 6,
    name: 'Abadango Cluster Princess',
    status: 'Alive',
    species: 'Alien',
    type: '',
    gender: 'Female',
    origin: {
      name: 'Abadango',
      url: 'https://rickandmortyapi.com/api/location/2'
    },
    location: {
      name: 'Abadango',
      url: 'https://rickandmortyapi.com/api/location/2'
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/27'],
    url: 'https://rickandmortyapi.com/api/character/6',
    created: '2017-11-04T19:50:28.250Z'
  },
  {
    id: 7,
    name: 'Abradolf Lincler',
    status: 'unknown',
    species: 'Human',
    type: 'Genetic experiment',
    gender: 'Male',
    origin: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20'
    },
    location: {
      name: 'Testicle Monster Dimension',
      url: 'https://rickandmortyapi.com/api/location/21'
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/7.jpeg',
    episode: [
      'https://rickandmortyapi.com/api/episode/10',
      'https://rickandmortyapi.com/api/episode/11'
    ],
    url: 'https://rickandmortyapi.com/api/character/7',
    created: '2017-11-04T19:59:20.523Z'
  },
  {
    id: 8,
    name: 'Adjudicator Rick',
    status: 'Dead',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: { name: 'unknown', url: '' },
    location: {
      name: 'Citadel of Ricks',
      url: 'https://rickandmortyapi.com/api/location/3'
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/8.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/28'],
    url: 'https://rickandmortyapi.com/api/character/8',
    created: '2017-11-04T20:03:34.737Z'
  },
  {
    id: 9,
    name: 'Agency Director',
    status: 'Dead',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20'
    },
    location: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20'
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/9.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/24'],
    url: 'https://rickandmortyapi.com/api/character/9',
    created: '2017-11-04T20:06:54.976Z'
  }
];
