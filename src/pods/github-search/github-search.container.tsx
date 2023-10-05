import React from 'react';

import { useProfileContext } from '@/core';
import { useMemberPage } from './github-search-member.hook';

import { GithubSearchComponent } from './github-search.component';

export const GithubSearchContainer = () => {
  const { userCompany } = useProfileContext();

  const { members, totalPage, setTotalPage, updateMembersPage } =
    useMemberPage();

  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    updateMembersPage(userCompany, page);
  }, []);

  const handleSubmit = React.useCallback((valor: string) => {
    setPage(1);
    setTotalPage(1);
    updateMembersPage(valor, page);
  }, []);

  const handleClick = (page: number) => {
    setPage(page);
    updateMembersPage(userCompany, page);
  };

  return (
    <GithubSearchComponent
      page={page}
      totalPage={totalPage}
      members={members}
      handleSubmit={handleSubmit}
      handleClick={handleClick}
    ></GithubSearchComponent>
  );
};
