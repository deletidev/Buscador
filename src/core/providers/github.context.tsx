import React from 'react';

export interface Github {
  company: string;
  page: number;
  scrollPosition: number;
}

interface ProfileContextModel {
  github: Github;
  setGithub: (github: Github) => void;
}

interface Props {
  children: React.ReactNode;
}

const createEmptyGithub = (): Github => ({
  company: 'Lemoncode',
  page: 1,
  scrollPosition: 0
});

const GithubContext = React.createContext<ProfileContextModel>({
  github: createEmptyGithub(),
  setGithub: (github: Github) => {}
});

export const GithubProvider: React.FC<Props> = props => {
  const { children } = props;
  const [github, setGithub] = React.useState<Github>(createEmptyGithub());

  return (
    <GithubContext.Provider value={{ github, setGithub }}>
      {children}
    </GithubContext.Provider>
  );
};

export const useGithubContext = () => React.useContext(GithubContext);
