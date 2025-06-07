import React from 'react';
import UserMetaCardSkeleton from './UserMetaCardSkeleton';
import SkeletonWrapper from '@/components/ui/skeleton';
import UserInfoCardSkeleton from './UserInfoCardSkeleton';
import UserAddressSkeleton from './UserAddressSkeleton';

const ProfileSkeleton: React.FC = () => {
  return (
    <SkeletonWrapper>
      <div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
          <div className="h-6 w-32 bg-gray-300 rounded-md dark:bg-gray-700 mb-5 lg:mb-7" />
          <div className="space-y-6">
            <UserMetaCardSkeleton />
            <UserInfoCardSkeleton />
            <UserAddressSkeleton />
          </div>
        </div>
      </div>
    </SkeletonWrapper>
  );
};

export default ProfileSkeleton;
