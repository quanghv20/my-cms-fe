'use client';

import React, { useEffect, useState } from 'react';
import { useToast } from '@/context/ToastContext';
import { profileService } from '@/services/profile.service';
import UserInfoCard from '@/components/user-profile/UserInfoCard';
import UserMetaCard from '@/components/user-profile/UserMetaCard';
import ProfileSkeleton from '@/components/skeletons/profile/ProfileSkeleton';
import type { IProfile } from '@/type/profile.type';

export default function ProfilePage() {
  const [profile, setProfile] = useState<IProfile | null>(null);
  const { showToast } = useToast();

  useEffect(() => {
    async function fetchProfile() {
      try {
        const profile = await profileService.getProfile("quanghv20");
        setProfile(profile);
      } catch (error: any) {
        showToast(error.message, "error")
      }
    }

    fetchProfile();
  }, []);

  if (!profile) return <ProfileSkeleton />;

  return (
    <div>
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
        <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
          Profile
        </h3>
        <div className="space-y-6">
          <UserMetaCard profile={profile} />
          <UserInfoCard profile={profile} />
          {/* <UserAddressCard /> */}
        </div>
      </div>
    </div>
  );
}
