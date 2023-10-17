import React from 'react';
import { Paper, Table, TableBody, TableHead, TableRow } from '@mui/material';

import {
  StyledTableCell,
  StyledTableContainer,
  StyledTableRow
} from '@/core/theme';
import { MemberEntity } from '@/pods/github-search/github-search.vm';

import { GithubSearchRowComponent } from './github-search-row.component';
import { useGithubContext } from '@/core';

interface Props {
  members: MemberEntity[];
  error: string;
}

export const GithubSearchTableComponent: React.FC<Props> = props => {
  const { members, error } = props;

  const containerScroll = React.useRef<HTMLTableElement>(null);
  const { github, setGithub } = useGithubContext();

  React.useEffect(() => {
    if (containerScroll.current) {
      containerScroll.current.scroll({
        top: github.scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [members]);

  const handleScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
    setGithub({
      ...github,
      scrollPosition: e.currentTarget.scrollTop
    });
  };

  return (
    <Paper sx={{ padding: { xs: 1, sm: 2 }, flexGrow: 1, height: 100 }}>
      <StyledTableContainer
        sx={{ height: '100%' }}
        ref={containerScroll}
        onScroll={handleScroll}
      >
        <Table
          stickyHeader
          aria-label="sticky table"
          sx={{
            minWidth: 350,
            borderCollapse: 'collapse'
          }}
        >
          <TableHead>
            <TableRow>
              <StyledTableCell
                sx={{
                  borderTopLeftRadius: '3px'
                }}
              >
                Avatar
              </StyledTableCell>
              <StyledTableCell>Miembro</StyledTableCell>
              <StyledTableCell
                align="right"
                sx={{
                  borderTopRightRadius: '3px'
                }}
              >
                Id
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {members.length > 0 ? (
              members.map(member => (
                <GithubSearchRowComponent key={member.id} member={member} />
              ))
            ) : (
              <StyledTableRow>
                <StyledTableCell>
                  <p>{error ? error : 'Loading...'}</p>
                </StyledTableCell>
              </StyledTableRow>
            )}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </Paper>
  );
};
