import { create } from '@mui/material/styles/createTransitions';
import React from 'react';

export interface SearchCharacter {
  searchCharacter: string;
  searchPage: number;
  searchScroll: number;
}

interface SearchCharacterContextModel {
  searchCharacter: SearchCharacter;
  setSearchCharacter: (searchCharacter: SearchCharacter) => void;
}

interface Props {
  children: React.ReactNode;
}

const createEmptySearchCharacter = (): SearchCharacter => ({
  searchCharacter: '',
  searchPage: 1,
  searchScroll: 0
});

const SearchCharacterContext = React.createContext<SearchCharacterContextModel>(
  {
    searchCharacter: createEmptySearchCharacter(),
    setSearchCharacter: (searchCharacter: SearchCharacter) => {}
  }
);

export const SearchCharacterProvider: React.FC<Props> = props => {
  const { children } = props;
  const [searchCharacter, setSearchCharacter] = React.useState<SearchCharacter>(
    createEmptySearchCharacter()
  );

  return (
    <SearchCharacterContext.Provider
      value={{ searchCharacter, setSearchCharacter }}
    >
      {children}
    </SearchCharacterContext.Provider>
  );
};

export const useSearchCharacterContext = () =>
  React.useContext(SearchCharacterContext);
