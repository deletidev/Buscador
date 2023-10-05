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

const SearchCharacterContext =
  React.createContext<SearchCharacterContextModel>(null);

export const SearchCharacterProvider: React.FC<Props> = props => {
  const { children } = props;
  const [searchCharacter, setSearchCharacter] = React.useState<SearchCharacter>(
    { searchCharacter: '', searchPage: 1, searchScroll: 0 }
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
