import React from 'react';
// import { characterMock } from './mockCharacters';
import { RickDetailComponent } from './rick-detail.component';
import { useParams } from 'react-router-dom';
import { CharacterVm, initCharacter } from './rick-detail.vm';
import { getCharacter } from './rick-detail.repository';

export const RickDetailContainer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = React.useState<CharacterVm>(
    initCharacter()
  );

  React.useEffect(() => {
    if (id) {
      getCharacter(id).then(setCharacter);
    }
  }, []);

  return <RickDetailComponent character={character}></RickDetailComponent>;
};
