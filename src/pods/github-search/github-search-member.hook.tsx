import React from 'react';
import { MemberEntity } from '@/pods/github-search/github-search.vm';
import { totalPages } from '@/pods/github-search/github-search.business';
import { mapMemberListToVM } from '@/pods/github-search/github-search.mappers';
import { catchMembersApi } from '@/pods/github-search/api/api';

export const useMemberPage = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [totalPage, setTotalPage] = React.useState(1);

  const updateMembersPage = (userCompany: string, page: number) => {
    catchMembersApi(userCompany, page)
      .then(result => {
        setMembers(mapMemberListToVM(result.data));
        if (result.linkHeader) {
          setTotalPage(totalPages(result.linkHeader, page));
        }
      })
      .catch(error => {
        setMembers([]);
      });
  };

  return { members, totalPage, setTotalPage, updateMembersPage };
};
