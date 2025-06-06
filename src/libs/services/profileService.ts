import { Profile } from '@/type/profile.type';
import { axiosInstance } from './axiosInstance';

function wait(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export const profileService = {
  async getProfile(): Promise<Profile> {
    // const res = await axiosInstance.get('/api/profile');
    // return res.data;

    await wait(1500); // fake timeout: 1.5s

    return {
      id: '1',
      name: 'Nguyen Van A',
      email: 'a.nguyen@example.com',
      phone: '0123456789',
      address: '123 Lê Lợi, Quận 1, TP.HCM',
      avatarUrl: 'https://i.pravatar.cc/150?img=3',
    };
  },

  async updateProfile(data: Partial<Profile>): Promise<Profile> {
    const res = await axiosInstance.put('/api/profile', data);
    return res.data;
  },
};