import { IProfile } from '@/type/profile.type';
import { requestApi } from '../libs/axiosInstance';

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const profileService = {
  async getProfile(username: string): Promise<IProfile> {
    const res = await requestApi<IProfile>({
      method: 'GET',
      url: `/profile/username/${username}`,
    });

    return res.data;
  }
};
