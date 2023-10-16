import React from 'react';
import { useParams } from 'react-router-dom';

import { getMember } from './github-detail.repository';
import { Member, initMember } from './github-detail.vm';
import { GithubDetailComponent } from './detail-github.component';

export const GithubDetailContainer: React.FC = () => {
  const { login } = useParams<{ login: string }>();
  const [member, setMember] = React.useState<Member>(initMember());

  React.useEffect(() => {
    if (login) {
      getMember(login).then(setMember);
    }
  }, []);

  return <GithubDetailComponent member={member}></GithubDetailComponent>;
};
