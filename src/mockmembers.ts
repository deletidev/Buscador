export interface Members {
  login: string;
  id: number;
  avatar_url: string;
}

export const members: Members[] = [
  {
    login: 'antonio06',
    id: 14540103,
    avatar_url: 'https://avatars.githubusercontent.com/u/14540103?v=4'
  },
  {
    login: 'brauliodiez',
    id: 1457912,
    avatar_url: 'https://avatars.githubusercontent.com/u/1457912?v=4'
  },
  {
    login: 'crsanti',
    id: 13205689,
    avatar_url: 'https://avatars.githubusercontent.com/u/13205689?v=4'
  },
  {
    login: 'fdejesusmazzoni',
    id: 43171355,
    avatar_url: 'https://avatars.githubusercontent.com/u/43171355?v=4'
  }
];

export interface Member {
  id: number;
  avatar_url: string;
  html_url: string;
  name: string;
  blog: string;
  location: string;
  bio: string;
}

export const member: Member = {
  id: 1457912,
  avatar_url: 'https://avatars.githubusercontent.com/u/1457912?v=4',
  html_url: 'https://github.com/brauliodiez',
  name: 'Braulio Diez',
  blog: 'http://www.lemoncode.net/',
  location: 'Malaga',
  bio: 'LemonCoder, React dev'
};
