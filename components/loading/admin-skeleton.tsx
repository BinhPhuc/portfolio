import { SkeletonLoader } from "@/components/ui/skeleton-loader";

export function AdminHeaderSkeleton() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <SkeletonLoader variant="text" className="w-32 h-6" />
          <div className="flex items-center gap-4">
            <SkeletonLoader variant="text" className="w-40 h-4" />
            <SkeletonLoader variant="button" className="w-24 h-9" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export function AdminCardSkeleton() {
  return (
    <div className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="mb-4">
        <SkeletonLoader variant="text" className="w-40 h-6 mb-2" />
      </div>
      <SkeletonLoader variant="text" className="w-full h-4 mb-4" />
      <SkeletonLoader variant="button" className="w-full h-9" />
    </div>
  );
}

export function AdminPageSkeleton() {
  return (
    <div className="min-h-screen bg-background">
      <AdminHeaderSkeleton />

      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <SkeletonLoader variant="text" className="w-48 h-8 mb-2" />
            <SkeletonLoader variant="text" className="w-96 h-5" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <AdminCardSkeleton />
          </div>

          <section className="mb-12">
            <SkeletonLoader variant="text" className="w-40 h-7 mb-6" />
            <div className="grid md:grid-cols-2 gap-6">
              <AdminCardSkeleton />
              <AdminCardSkeleton />
            </div>
          </section>

          <section className="mb-12">
            <SkeletonLoader variant="text" className="w-48 h-7 mb-6" />
            <div className="grid md:grid-cols-2 gap-6">
              <AdminCardSkeleton />
              <AdminCardSkeleton />
            </div>
          </section>

          <section className="mb-12">
            <SkeletonLoader variant="text" className="w-44 h-7 mb-6" />
            <div className="grid md:grid-cols-2 gap-6">
              <AdminCardSkeleton />
              <AdminCardSkeleton />
            </div>
          </section>

          <div className="bg-card border rounded-lg p-6">
            <SkeletonLoader variant="text" className="w-32 h-6 mb-4" />
            <SkeletonLoader variant="text" className="w-full h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
