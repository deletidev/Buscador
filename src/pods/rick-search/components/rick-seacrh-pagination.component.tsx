import React from 'react';
import { Box, Button } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Action, SearchRick } from '../rick-search.reducer';
import { useSearchCharacterContext } from '@/core';

interface Props {
  searchState: SearchRick;
  dispatch: React.Dispatch<Action>;
  updateCharactersPage: (page: number) => void;
}

export const RickSearchPaginationComponent: React.FC<Props> = props => {
  const { searchState, dispatch, updateCharactersPage } = props;
  const { setSearchCharacter } = useSearchCharacterContext();

  const handleClick = (page: number) => () => {
    dispatch({ type: 'setPage', payload: page });
    updateCharactersPage(page);
    setSearchCharacter({
      searchCharacter: searchState.value,
      searchPage: page,
      searchScroll: 0
    });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1.5
      }}
    >
      <Button
        onClick={handleClick(searchState.page - 1)}
        disabled={searchState.page === 1 ? true : false}
        variant="contained"
        size="small"
        startIcon={<ArrowBackIosNewIcon />}
      >
        <span css={{ paddingTop: '4px' }}>Prev</span>
      </Button>
      <p> {` ${searchState.page} of ${searchState.totalPages} `}</p>
      <Button
        onClick={handleClick(searchState.page + 1)}
        disabled={searchState.totalPages === searchState.page ? true : false}
        variant="contained"
        size="small"
        color="secondary"
        endIcon={<ArrowForwardIosIcon />}
      >
        <span css={{ paddingTop: '4px' }}>Next</span>
      </Button>
    </Box>
  );
};
