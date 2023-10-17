import React from 'react';
import { Typography } from '@mui/material';

import {
  GithubSearchFormComponent,
  GithubSearchPaginationComponent,
  GithubSearchTableComponent
} from './components';
import { MemberEntity } from './github-search.vm';

interface Props {
  page: number;
  totalPage: number;
  members: MemberEntity[];
  handleSubmit: (valor: string) => void;
  handleClick: (page: number) => void;
  error: string;
}

export const GithubSearchComponent: React.FC<Props> = props => {
  const { page, totalPage, members, handleSubmit, handleClick, error } = props;

  return (
    <>
      <Typography component="h1" variant="h1">
        Busqueda de miembros de una compañia en Github
      </Typography>
      <GithubSearchFormComponent
        onSubmit={handleSubmit}
      ></GithubSearchFormComponent>
      <GithubSearchTableComponent
        members={members}
        error={error}
      ></GithubSearchTableComponent>
      <GithubSearchPaginationComponent
        page={page}
        totalPage={totalPage}
        onClick={handleClick}
      ></GithubSearchPaginationComponent>
    </>
  );
};
