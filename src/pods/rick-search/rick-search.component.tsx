import React from 'react';
import { Typography, Box } from '@mui/material';

import { rickTheme } from '@/core';
import {
  FormRickAndMorty,
  RickSearchGridComponent,
  RickSearchPaginationComponent
} from './components';

import { Action, SearchRick } from './rick-search.reducer';

interface Props {
  searchState: SearchRick;
  dispatch: React.Dispatch<Action>;
  updateCharactersPage: (page: number) => void;
}

export const RickSearchComponent: React.FC<Props> = props => {
  const { searchState, dispatch, updateCharactersPage } = props;
  return (
    <>
      <Typography
        variant="h3"
        component="h1"
        sx={{
          color: 'primary.main',
          WebkitTextStroke: `1px ${rickTheme.palette.secondary.main}`,
          fontSize: { xs: '2rem', sm: '2.3rem' }
        }}
      >
        Rick and Morty Search Characters
      </Typography>
      <FormRickAndMorty
        searchState={searchState}
        dispatch={dispatch}
        updateCharactersPage={updateCharactersPage}
      ></FormRickAndMorty>
      <Box
        sx={{
          flexGrow: 1,
          height: '200px'
        }}
      >
        <RickSearchGridComponent
          characters={searchState.charactersList}
        ></RickSearchGridComponent>
      </Box>
      <RickSearchPaginationComponent
        searchState={searchState}
        dispatch={dispatch}
        updateCharactersPage={updateCharactersPage}
      ></RickSearchPaginationComponent>
    </>
  );
};
