'use client';

import React, { useEffect, useState } from 'react';
import UserAddressCard from '@/components/user-profile/UserAddressCard';
import UserInfoCard from '@/components/user-profile/UserInfoCard';
import UserMetaCard from '@/components/user-profile/UserMetaCard';
import { profileService } from '@/libs/services/profileService';
import type { Profile } from '@/type/profile.type';
import SkeletonWrapper from '@/components/ui/skeleton';
import UserMetaCardSkeleton from '@/components/skeletons/profile/UserMetaCardSkeleton';
import ProfileSkeleton from '@/components/skeletons/profile/ProfileSkeleton';

export default function Profile() {
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    profileService.getProfile().then(setProfile);
  }, []);

  if (!profile) return <ProfileSkeleton />;

  return (
    <div>
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
        <h3 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-7">
          Profile
        </h3>
        <div className="space-y-6">
          <UserMetaCard />
          <UserInfoCard />
          <UserAddressCard />
        </div>
      </div>
    </div>
  );
}
