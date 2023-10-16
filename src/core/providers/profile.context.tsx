import React from 'react';

export interface CompanyName {
  company: string;
}

interface ProfileContextModel {
  userCompany: string;
  setUserCompany: (userCompany: string) => void;
}

interface Props {
  children: React.ReactNode;
}

const ProfileContext = React.createContext<ProfileContextModel>({
  userCompany: '',
  setUserCompany: (userCompany: string) => {}
});

export const ProfileProvider: React.FC<Props> = props => {
  const { children } = props;
  const [userCompany, setUserCompany] = React.useState<string>('Lemoncode');

  return (
    <ProfileContext.Provider value={{ userCompany, setUserCompany }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfileContext = () => React.useContext(ProfileContext);
