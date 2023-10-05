import { MemberApi } from './api/api.model';
import { Member } from './github-detail.vm';

export const mapMemberToVM = (data: MemberApi): Member => ({
  id: data.id,
  avatarUrl: data.avatar_url,
  htmlUrl: data.html_url,
  name: data.name,
  blog: data.blog,
  location: data.location
});
