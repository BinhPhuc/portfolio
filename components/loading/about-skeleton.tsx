import { SkeletonLoader } from "@/components/ui/skeleton-loader";

export function IntroSkeleton() {
  return (
    <div className="py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <SkeletonLoader variant="text" className="w-48 h-8 mx-auto mb-8" />
        <div className="max-w-2xl mx-auto space-y-4">
          <SkeletonLoader variant="text" lines={3} className="h-5" />
          <SkeletonLoader variant="text" className="w-4/5 h-5" />
        </div>
      </div>
    </div>
  );
}

export function ExperienceSkeleton() {
  return (
    <div className="py-16 px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <SkeletonLoader variant="text" className="w-48 h-8 mx-auto mb-12" />

        <div className="space-y-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="border rounded-lg p-6 bg-card">
              <div className="flex justify-between items-start mb-4">
                <div className="space-y-2">
                  <SkeletonLoader variant="text" className="w-48 h-6" />
                  <SkeletonLoader variant="text" className="w-32 h-5" />
                </div>
                <SkeletonLoader variant="text" className="w-24 h-5" />
              </div>
              <SkeletonLoader variant="text" lines={2} className="h-5" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function EducationSkeleton() {
  return (
    <div className="py-16 px-6">
      <div className="container mx-auto max-w-4xl">
        <SkeletonLoader variant="text" className="w-48 h-8 mx-auto mb-12" />

        <div className="space-y-6">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="border rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="space-y-2">
                  <SkeletonLoader variant="text" className="w-64 h-6" />
                  <SkeletonLoader variant="text" className="w-48 h-5" />
                </div>
                <SkeletonLoader variant="text" className="w-32 h-5" />
              </div>
              <SkeletonLoader variant="text" className="w-3/4 h-5" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function AboutPageSkeleton() {
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

      <div className="pt-24">
        <IntroSkeleton />
        <ExperienceSkeleton />
        <EducationSkeleton />
      </div>

      <div className="py-8 px-6 border-t bg-muted/30">
        <div className="container mx-auto text-center">
          <SkeletonLoader variant="text" className="w-48 h-5 mx-auto" />
        </div>
      </div>
    </div>
  );
}
