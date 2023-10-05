import React from 'react';
import { Container, Link } from '@mui/material';

import { Member } from './github-detail.vm';
import { GithubDetailImageComponent } from './components';

interface Props {
  member: Member;
}
export const GithubDetailComponent: React.FC<Props> = props => {
  const { member } = props;
  return (
    <Container
      sx={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 2,
        paddingBottom: 2
      }}
    >
      <GithubDetailImageComponent member={member}></GithubDetailImageComponent>
      <p>Nombre: {member.name}</p>
      {member.location && <p>Localidad: {member.location}</p>}
      {member.blog && (
        <p>
          Blog:
          <Link href={member.blog} target="_blank" color="secondary">
            {member.blog}
          </Link>
        </p>
      )}
    </Container>
  );
};
