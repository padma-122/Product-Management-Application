const SkeletonLoading = () => {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

      {/* Image Skeleton */}
      <div className="h-48 animate-pulse bg-gray-200" />

      
      <div className="flex items-start justify-between p-4">

        <div className="min-w-0 flex-1">
          {/* Title */}
          <div className="h-5 w-3/4 animate-pulse rounded bg-gray-200" />

          {/* Category */}
          <div className="mt-3 h-4 w-1/3 animate-pulse rounded bg-gray-200" />
        </div>

        {/* Action Icons */}
        <div className="flex shrink-0 items-center gap-1">
          <div className="h-8 w-8 animate-pulse rounded-full bg-gray-200" />
          <div className="h-8 w-8 animate-pulse rounded-full bg-gray-200" />
        </div>

      </div>

    </div>
  );
};

export default SkeletonLoading;