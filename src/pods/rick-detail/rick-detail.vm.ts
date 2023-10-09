export interface CharacterVm {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  type?: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
  image: string;
  created: string;
}

export const initCharacter = (): CharacterVm => ({
  id: 0,
  name: '',
  status: '',
  species: '',
  gender: '',
  origin: {
    name: ''
  },
  location: {
    name: ''
  },
  image: '',
  created: ''
});
