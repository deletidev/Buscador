import React from 'react';
import { CharacterVm } from '../rick-detail.vm';
import { RickDetailInfoComponent } from './rick-detail-info.component';
import { grid, title, image } from './rick-detail-grid.component.styles';

interface Props {
  character: CharacterVm;
}

export const RickDetailGridComponent: React.FC<Props> = props => {
  const { character } = props;
  return (
    <div css={grid}>
      <h1 css={title}>{character.name}</h1>
      <div css={image}>
        <img src={character.image} alt={character.name} />
      </div>
      <RickDetailInfoComponent character={character}></RickDetailInfoComponent>
    </div>
  );
};
