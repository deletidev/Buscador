import React from 'react';
import * as classes from './rick-search-card.styles';
import { CharacterVm } from '../../rick-search.vm';
import { Link, generatePath } from 'react-router-dom';
import { path } from '@/core';

interface Props {
  character: CharacterVm;
}
export const RickSearchCardComponent: React.FC<Props> = props => {
  const { character } = props;

  return (
    <div data-satus={character.status.toLowerCase()} css={classes.card}>
      <div>
        <h3>{character.name}</h3>
        <p>{character.status}</p>
      </div>
      <div css={classes.cardImage}>
        <img src={character.image} alt={character.name} />
      </div>

      <Link to={generatePath(path.DETAILRICK, { id: character.id })}>
        Know more
      </Link>
    </div>
  );
};
