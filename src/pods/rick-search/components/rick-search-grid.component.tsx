import React from 'react';

import { rickTheme, useSearchCharacterContext } from '@/core';

import { RickSearchCardComponent } from './rick-search-card';
import { CharacterVm } from '../rick-search.vm';

interface Props {
  characters: CharacterVm[];
}
export const RickSearchGridComponent: React.FC<Props> = props => {
  const { characters } = props;
  const containerScroll = React.useRef<HTMLDivElement>(null);
  const { searchCharacter, setSearchCharacter } = useSearchCharacterContext();

  React.useEffect(() => {
    if (containerScroll.current) {
      containerScroll.current.scroll({
        top: searchCharacter.searchScroll,
        behavior: 'smooth'
      });
    }
  }, [characters]);

  const handleScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
    setSearchCharacter({
      ...searchCharacter,
      searchScroll: e.currentTarget.scrollTop
    });
  };

  return (
    <div
      ref={containerScroll}
      onScroll={handleScroll}
      css={{
        height: '100%',
        width: '100%',
        overflowY: 'scroll',
        scrollbarColor: ` ${rickTheme.palette.primary.main} transparent`,
        scrollbarWidth: 'thin',
        '&::-webkit-scrollbar': {
          width: '7px',
          height: '7px'
        },
        '&::-webkit-scrollbar-thumb': {
          background: rickTheme.palette.primary.main,
          borderRadius: '12px',
          border: `1.75px solid ${rickTheme.palette.secondary.main}`
        },
        '&::-webkit-scrollbar-track': {
          background: rickTheme.palette.background.default
        }
      }}
    >
      <div
        css={{
          display: 'grid',
          gap: `${rickTheme.spacing(3.5)}`,
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          justifyItems: 'center',
          '@media screen and (min-width: 600px)': {
            gap: `${rickTheme.spacing(5)}`
          }
        }}
      >
        {characters.length > 0 ? (
          characters.map(character => (
            <RickSearchCardComponent
              key={character.id}
              character={character}
            ></RickSearchCardComponent>
          ))
        ) : (
          <p>No hay resultados</p>
        )}
      </div>
    </div>
  );
};
