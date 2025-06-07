const UserInfoCardSkeleton: React.FC = () => {
  return (
    <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6 animate-pulse">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-4">
          {/* Header */}
          <div className="h-6 w-40 bg-gray-300 rounded-md dark:bg-gray-700" />

          {/* Grid labels and values */}
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">
            {Array(5)
              .fill(0)
              .map((_, idx) => (
                <div key={idx}>
                  <div className="mb-2 h-3 w-24 bg-gray-300 rounded dark:bg-gray-700" />{' '}
                  {/* label */}
                  <div className="h-5 w-48 bg-gray-300 rounded dark:bg-gray-700" /> {/* value */}
                </div>
              ))}
          </div>
        </div>

        {/* Button placeholder */}
        <div className="h-11 w-full lg:w-auto rounded-full bg-gray-300 dark:bg-gray-700" />
      </div>
    </div>
  );
};

export default UserInfoCardSkeleton;
