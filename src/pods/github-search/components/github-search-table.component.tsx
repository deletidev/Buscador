import React from 'react';
import { Paper, Table, TableBody, TableHead, TableRow } from '@mui/material';

import {
  StyledTableCell,
  StyledTableContainer,
  StyledTableRow
} from '@/core/theme';
import { useProfileContext } from '@/core';
import { MemberEntity } from '@/pods/github-search/github-search.vm';

import { GithubSearchRowComponent } from './github-search-row.component';

interface Props {
  members: MemberEntity[];
}

export const GithubSearchTableComponent: React.FC<Props> = props => {
  const { members } = props;
  const { userCompany } = useProfileContext();
  const tableScroll = React.useRef(null);

  React.useEffect(() => {
    if (tableScroll.current) {
      tableScroll.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, [members]);

  return (
    <Paper sx={{ padding: { xs: 1, sm: 2 }, flexGrow: 1, height: 100 }}>
      <StyledTableContainer sx={{ height: '100%' }}>
        <Table
          stickyHeader
          aria-label="sticky table"
          sx={{
            minWidth: 350,
            borderCollapse: 'collapse'
          }}
          ref={tableScroll}
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
                  <p>{`No existe una compañia con el nombre ${userCompany}`}</p>
                </StyledTableCell>
              </StyledTableRow>
            )}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </Paper>
  );
};
