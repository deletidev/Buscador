import React from 'react';

import { useGithubContext } from '@/core';
import { useMemberPage } from './github-search-member.hook';

import { GithubSearchComponent } from './github-search.component';

export const GithubSearchContainer = () => {
  const { github, setGithub } = useGithubContext();

  const {
    members,
    totalPage,
    setTotalPage,
    updateMembersPage,
    error,
    setError
  } = useMemberPage();

  React.useEffect(() => {
    updateMembersPage(github.company, github.page);
  }, []);

  const handleSubmit = React.useCallback((valor: string) => {
    setError('');
    setTotalPage(1);
    updateMembersPage(valor, github.page);
  }, []);

  const handleClick = (page: number) => {
    setGithub({ ...github, page, scrollPosition: 0 });
    updateMembersPage(github.company, page);
  };

  return (
    <GithubSearchComponent
      page={github.page}
      totalPage={totalPage}
      members={members}
      handleSubmit={handleSubmit}
      handleClick={handleClick}
      error={error}
    ></GithubSearchComponent>
  );
};
