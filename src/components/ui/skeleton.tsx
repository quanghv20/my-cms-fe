import React from 'react';

const SkeletonWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div role="status" className="animate-pulse space-y-2">
    {children}
  </div>
);

export default SkeletonWrapper;
