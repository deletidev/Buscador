import React from 'react';
import { Avatar, Badge, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

import { Member } from '../github-detail.vm';

interface Props {
  member: Member;
}

export const GithubDetailImageComponent: React.FC<Props> = props => {
  const { member } = props;

  return (
    <Badge
      overlap="circular"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      badgeContent={
        <Link
          href={member.htmlUrl}
          target="_blank"
          sx={{
            backgroundColor: 'background.paper',
            borderRadius: '100%',
            overflow: 'hidden'
          }}
        >
          <GitHubIcon
            titleAccess="Ir a github"
            fill="Twotone"
            sx={{
              fontSize: 46
            }}
          ></GitHubIcon>
        </Link>
      }
    >
      <Avatar
        alt={member.name}
        src={member.avatarUrl}
        sx={{ width: 240, height: 240 }}
      />
    </Badge>
  );
};
