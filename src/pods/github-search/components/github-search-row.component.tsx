import { Link as RouterLink, generatePath } from 'react-router-dom';
import { Avatar, Link, TableRow } from '@mui/material';

import { path } from '@/core';
import { myTheme } from '@/core';
import { MemberEntity } from '@/pods/github-search/github-search.vm';
import { StyledTableCell, StyledTableRow } from '@/core/theme';

interface Props {
  member: MemberEntity;
}
export const GithubSearchRowComponent: React.FC<Props> = props => {
  const { member } = props;

  return (
    <StyledTableRow key={member.id}>
      <StyledTableCell>
        <Avatar
          src={member.avatarUrl}
          alt={member.login}
          sx={{
            width: { xs: 45, sm: 50 },
            height: { xs: 45, sm: 50 },
            border: `1px solid ${myTheme.palette.common.white}`
          }}
        />
      </StyledTableCell>
      <StyledTableCell scope="row">
        <Link
          component={RouterLink}
          to={generatePath(path.DETAILGITHUB, { login: member.login })}
        >
          {member.login}
        </Link>
      </StyledTableCell>
      <StyledTableCell align="right">{member.id}</StyledTableCell>
    </StyledTableRow>
  );
};
