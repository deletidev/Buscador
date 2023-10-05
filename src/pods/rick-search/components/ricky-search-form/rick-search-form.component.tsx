import React from 'react';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import searchImg from '@/assets/searchRyM.svg';

import {
  input,
  inputIcon,
  imgSearch,
  inputAdornment
} from './rick-search-form.styles';
import { Action, SearchRick } from '../../rick-search.reducer';
import { useSearchCharacterContext } from '@/core';

interface Props {
  searchState: SearchRick;
  dispatch: React.Dispatch<Action>;
  updateCharactersPage: (page: number) => void;
}
export const FormRickAndMorty = React.memo((props: Props) => {
  const { searchState, dispatch, updateCharactersPage } = props;
  const { setSearchCharacter } = useSearchCharacterContext();

  const handleSubmit: React.FormEventHandler<HTMLDivElement> = e => {
    e.preventDefault();
    setSearchCharacter({
      searchCharacter: searchState.value,
      searchPage: 1,
      searchScroll: 0
    });
    dispatch({
      type: 'setTotalPages',
      payload: 1
    });
    dispatch({
      type: 'setPage',
      payload: 1
    });
    updateCharactersPage(1);
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    dispatch({ type: 'setValue', payload: e.target.value });
  };

  return (
    <TextField
      component="form"
      id="search"
      type="search"
      value={searchState.value}
      size="small"
      onChange={handleChange}
      onSubmit={handleSubmit}
      color="secondary"
      sx={input}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" sx={inputAdornment}>
            <img src={searchImg} css={imgSearch}></img>
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment
            position="end"
            component="button"
            type="submit"
            sx={inputIcon}
          >
            <SearchIcon color="primary" />
          </InputAdornment>
        ),
        sx: { paddingLeft: '5px', color: 'text.secondary', fontSize: '1rem' }
      }}
    />
  );
});
