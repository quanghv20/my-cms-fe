import React from 'react';

const UserMetaCardSkeleton: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6 animate-pulse">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex flex-col items-center w-full gap-6 xl:flex-row">
            <div className="w-20 h-20 rounded-full bg-gray-200 dark:bg-gray-700" />

            <div className="flex flex-col items-center gap-3 xl:items-start xl:justify-center">
              <div className="w-40 h-5 bg-gray-200 rounded dark:bg-gray-700" />
              <div className="flex items-center gap-3">
                <div className="w-24 h-4 bg-gray-200 rounded dark:bg-gray-700" />
                <div className="h-3.5 w-px bg-gray-300 dark:bg-gray-700" />
                <div className="w-32 h-4 bg-gray-200 rounded dark:bg-gray-700" />
              </div>
            </div>

            <div className="flex items-center gap-2 grow xl:justify-end">
              {Array(4)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="h-11 w-11 rounded-full bg-gray-200 dark:bg-gray-700" />
                ))}
            </div>
          </div>

          <div className="w-full lg:w-auto h-11 rounded-full bg-gray-200 dark:bg-gray-700" />
        </div>
      </div>
    </div>
  );
};

export default UserMetaCardSkeleton;
