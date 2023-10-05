export interface Member {
  id: number;
  avatarUrl: string;
  htmlUrl: string;
  name: string;
  blog: string;
  location: string;
}

export const initMember = (): Member => ({
  id: 0,
  avatarUrl: '',
  htmlUrl: '',
  name: '',
  blog: '',
  location: ''
});
