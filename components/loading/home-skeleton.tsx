import { SkeletonLoader } from "@/components/ui/skeleton-loader";

export function HeroSkeleton() {
  return (
    <div className="pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-8 relative w-[150px] h-[150px] mx-auto">
          <SkeletonLoader
            variant="avatar"
            className="w-[150px] h-[150px] border-4"
          />
        </div>

        <div className="mb-8">
          <SkeletonLoader
            variant="text"
            className="w-32 h-6 mx-auto mb-4 rounded-full"
          />
          <SkeletonLoader variant="text" className="w-96 h-12 mx-auto mb-6" />

          <div className="max-w-2xl mx-auto mb-8 space-y-3">
            <SkeletonLoader variant="text" className="w-full h-6" />
            <SkeletonLoader variant="text" className="w-4/5 h-6 mx-auto" />
            <SkeletonLoader variant="text" className="w-3/4 h-6 mx-auto" />
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mb-12">
          {[1, 2, 3, 4].map((i) => (
            <SkeletonLoader
              key={i}
              variant="button"
              className="w-10 h-10 rounded-full"
            />
          ))}
        </div>

        <SkeletonLoader variant="button" className="w-6 h-6 mx-auto rounded" />
      </div>
    </div>
  );
}

export function SkillsSkeleton() {
  return (
    <div className="py-16 px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <SkeletonLoader variant="text" className="w-48 h-8 mx-auto mb-12" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="bg-card rounded-lg border p-4 text-center">
              <SkeletonLoader variant="text" className="w-20 h-5 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function AboutSkeleton() {
  return (
    <div className="py-20 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <SkeletonLoader variant="text" className="w-40 h-9 mx-auto mb-6" />

        <div className="max-w-2xl mx-auto mb-12 space-y-3">
          <SkeletonLoader variant="text" className="w-full h-6" />
          <SkeletonLoader variant="text" className="w-4/5 h-6 mx-auto" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <SkeletonLoader variant="button" className="w-32 h-11" />
          <SkeletonLoader variant="button" className="w-28 h-11" />
        </div>
      </div>
    </div>
  );
}

export function HomePageSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <SkeletonLoader variant="text" className="w-24 h-6" />
          <div className="flex gap-4">
            <SkeletonLoader variant="button" className="w-16 h-8" />
            <SkeletonLoader variant="button" className="w-16 h-8" />
            <SkeletonLoader variant="button" className="w-16 h-8" />
          </div>
        </div>
      </div>

      <HeroSkeleton />
      <SkillsSkeleton />
      <AboutSkeleton />

      <div className="py-8 px-6 border-t bg-muted/30">
        <div className="container mx-auto text-center">
          <SkeletonLoader variant="text" className="w-48 h-5 mx-auto" />
        </div>
      </div>
    </div>
  );
}
