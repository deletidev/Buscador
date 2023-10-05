import { MemberApi } from './api/api.model';
import { MemberEntity } from './github-search.vm';

export const mapMemberListToVM = (data: MemberApi[]): MemberEntity[] => {
  return data.map(mapMemberToVM);
};

const mapMemberToVM = (data: MemberApi): MemberEntity => ({
  id: data.id,
  login: data.login,
  avatarUrl: data.avatar_url
});
