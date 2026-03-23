

export const SparklineSkeleton = () => (
  <div className="bg-bg-card p-5 rounded-[14px] border border-border-light shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] flex flex-col justify-between h-[150px] overflow-hidden relative">
    <div className="z-10 relative">
      <div className="flex justify-between items-start mb-0.5">
        <div className="h-5 w-24 bg-border-light/50 rounded animate-pulse" />
        <div className="h-5 w-16 bg-border-light/50 rounded-[6px] animate-pulse" />
      </div>

      <div className="h-4 w-16 bg-border-light/50 rounded animate-pulse mt-2" />
    </div>

    <div className="flex items-end justify-between z-10 w-full relative">
      <div className="h-8 w-20 bg-border-light/50 rounded animate-pulse" />
    </div>

    {/* Background Chart Placeholder */}
    <div className="absolute bottom-2 right-2 w-[63%] h-[72%] bg-gradient-to-t from-border-light/10 to-transparent rounded animate-pulse" />
  </div>
);

const MetricRowSkeleton = ({ bgClass }: { bgClass: string }) => (
  <div className={`flex justify-between items-center py-2.5 px-5 -mx-5 ${bgClass}`}>
    <div className="h-4 w-28 bg-border-light/50 rounded animate-pulse" />
    <div className="flex items-center">
      <div className="h-4 w-12 bg-border-light/50 rounded w-16 mr-4 animate-pulse" />
      <div className="h-4 w-12 bg-border-light/50 rounded w-16 animate-pulse" />
    </div>
  </div>
);

export const DetailCardSkeleton = () => (
  <div className="bg-bg-card rounded-2xl border border-border-light shadow-sm flex flex-col p-5 pb-3">
    <div className="flex justify-between items-center mb-5">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-border-light/50 animate-pulse border border-border-light" />
        <div className="h-5 w-24 bg-border-light/50 rounded animate-pulse" />
      </div>
      <div className="flex items-center gap-2">
        <div className="w-16 h-6 rounded-md bg-border-light/50 animate-pulse" />
        <div className="w-6 h-6 rounded-md bg-border-light/50 animate-pulse" />
      </div>
    </div>

    <div className="flex flex-col gap-0 border-b border-border-light/30 pb-2 mb-3">
      <MetricRowSkeleton bgClass="bg-bg-stripe" />
      <MetricRowSkeleton bgClass="bg-bg-card" />
      <MetricRowSkeleton bgClass="bg-bg-stripe" />
    </div>

    <div className="flex justify-between items-center mb-3 mt-1">
      <div className="h-4 w-24 bg-border-light/50 rounded animate-pulse" />
      <div className="h-4 w-16 bg-border-light/50 rounded animate-pulse" />
    </div>

    <div className="flex flex-col gap-0">
      <MetricRowSkeleton bgClass="bg-bg-stripe" />
      <MetricRowSkeleton bgClass="bg-bg-card" />
      <MetricRowSkeleton bgClass="bg-bg-stripe" />
    </div>
  </div>
);

export const DashboardSkeleton = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-1">
        <div className="h-7 w-48 bg-border-light/50 rounded animate-pulse" />
        <div className="flex gap-3">
          <div className="h-9 w-24 bg-border-light/50 rounded-md animate-pulse" />
          <div className="h-9 w-24 bg-border-light/50 rounded-md animate-pulse" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 4xl:grid-cols-4 5xl:grid-cols-5 gap-6 mb-1">
        <SparklineSkeleton />
        <SparklineSkeleton />
        <SparklineSkeleton />
        <div className="hidden 4xl:block"><SparklineSkeleton /></div>
        <div className="hidden 5xl:block"><SparklineSkeleton /></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 4xl:grid-cols-4 5xl:grid-cols-5 gap-6">
        <DetailCardSkeleton />
        <DetailCardSkeleton />
        <DetailCardSkeleton />
        <div className="hidden 4xl:block"><DetailCardSkeleton /></div>
        <div className="hidden 5xl:block"><DetailCardSkeleton /></div>
      </div>
    </>
  );
};
