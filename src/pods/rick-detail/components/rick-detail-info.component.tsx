import React from 'react';
import { CharacterVm } from '../rick-detail.vm';
import { info } from './rick-detail-info.component.styles';
interface Props {
  character: CharacterVm;
}
export const RickDetailInfoComponent: React.FC<Props> = props => {
  const { character } = props;

  return (
    <div css={info}>
      <p>
        State: <span>{character.status}</span>
      </p>
      <p>
        Species: <span>{character.species}</span>
      </p>
      {character.type && (
        <p>
          Type: <span>{character.type}</span>
        </p>
      )}
      <p>
        Gender: <span>{character.gender}</span>
      </p>
      <p>
        Origin: <span>{character.origin.name}</span>
      </p>
      <p>
        Location: <span>{character.location.name}</span>
      </p>
    </div>
  );
};
