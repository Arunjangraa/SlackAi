

export const SparklineSkeleton = () => (
  <div className="bg-white p-5 rounded-[14px] border border-gray-100 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] flex flex-col justify-between h-[150px] overflow-hidden relative">
    <div className="z-10 relative">
      <div className="flex justify-between items-start mb-0.5">
        <div className="h-5 w-24 bg-gray-200 rounded animate-pulse" />
        <div className="h-5 w-16 bg-gray-200 rounded-[6px] animate-pulse" />
      </div>

      <div className="h-4 w-16 bg-gray-200 rounded animate-pulse mt-2" />
    </div>

    <div className="flex items-end justify-between z-10 w-full relative">
      <div className="h-8 w-20 bg-gray-200 rounded animate-pulse" />
    </div>

    {/* Background Chart Placeholder */}
    <div className="absolute bottom-2 right-2 w-[63%] h-[72%] bg-gradient-to-t from-gray-50 to-transparent rounded animate-pulse" />
  </div>
);

const MetricRowSkeleton = ({ bgClass }: { bgClass: string }) => (
  <div className={`flex justify-between items-center py-2.5 px-5 -mx-5 ${bgClass}`}>
    <div className="h-4 w-28 bg-gray-200 rounded animate-pulse" />
    <div className="flex items-center">
      <div className="h-4 w-12 bg-gray-200 rounded w-16 mr-4 animate-pulse" />
      <div className="h-4 w-12 bg-gray-200 rounded w-16 animate-pulse" />
    </div>
  </div>
);

export const DetailCardSkeleton = () => (
  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col p-5 pb-3">
    <div className="flex justify-between items-center mb-5">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse border border-gray-100" />
        <div className="h-5 w-24 bg-gray-200 rounded animate-pulse" />
      </div>
      <div className="flex items-center gap-2">
        <div className="w-16 h-6 rounded-md bg-gray-200 animate-pulse" />
        <div className="w-6 h-6 rounded-md bg-gray-200 animate-pulse" />
      </div>
    </div>

    <div className="flex flex-col gap-0 border-b border-gray-50 pb-2 mb-3">
      <MetricRowSkeleton bgClass="bg-[#F9FAFB]" />
      <MetricRowSkeleton bgClass="bg-white" />
      <MetricRowSkeleton bgClass="bg-[#F9FAFB]" />
    </div>

    <div className="flex justify-between items-center mb-3 mt-1">
      <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
      <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
    </div>

    <div className="flex flex-col gap-0">
      <MetricRowSkeleton bgClass="bg-[#F9FAFB]" />
      <MetricRowSkeleton bgClass="bg-white" />
      <MetricRowSkeleton bgClass="bg-[#F9FAFB]" />
    </div>
  </div>
);

export const DashboardSkeleton = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-1">
        <div className="h-7 w-48 bg-gray-200 rounded animate-pulse" />
        <div className="flex gap-3">
          <div className="h-9 w-24 bg-gray-200 rounded-md animate-pulse" />
          <div className="h-9 w-24 bg-gray-200 rounded-md animate-pulse" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6 gap-6 mb-1">
        <SparklineSkeleton />
        <SparklineSkeleton />
        <SparklineSkeleton />
        <div className="hidden 2xl:block"><SparklineSkeleton /></div>
        <div className="hidden 3xl:block"><SparklineSkeleton /></div>
        <div className="hidden 4xl:block"><SparklineSkeleton /></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6 gap-6">
        <DetailCardSkeleton />
        <DetailCardSkeleton />
        <DetailCardSkeleton />
        <div className="hidden 2xl:block"><DetailCardSkeleton /></div>
        <div className="hidden 3xl:block"><DetailCardSkeleton /></div>
        <div className="hidden 4xl:block"><DetailCardSkeleton /></div>
      </div>
    </>
  );
};
