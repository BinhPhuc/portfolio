import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function TimelineLoading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <Skeleton className="h-6 w-48 mb-6" />

          <div className="flex items-center justify-between mb-8">
            <div>
              <Skeleton className="h-10 w-64 mb-2" />
              <Skeleton className="h-5 w-48" />
            </div>
            <Skeleton className="h-10 w-40" />
          </div>

<<<<<<< HEAD
          <div className="grid gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Skeleton className="h-5 w-5 rounded" />
                        <Skeleton className="h-7 w-64" />
                      </div>
                      <div className="flex items-center gap-3">
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-4 w-4 rounded-full" />
                        <Skeleton className="h-4 w-40" />
                        <Skeleton className="h-4 w-4 rounded-full" />
                        <Skeleton className="h-4 w-24" />
                      </div>
                    </div>
                    <Skeleton className="h-6 w-20 rounded-full" />
                  </div>
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full mb-4" />
                  <Skeleton className="h-4 w-3/4 mb-6" />

                  <div className="space-y-4">
                    <div>
                      <Skeleton className="h-4 w-24 mb-2" />
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-5/6" />
=======
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="flex flex-col">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <Skeleton className="h-5 w-5 rounded" />
                    <Skeleton className="h-5 w-16 rounded-full" />
                  </div>
                  <Skeleton className="h-6 w-full mb-2" />
                  <Skeleton className="h-6 w-3/4 mb-3" />
                  <div className="space-y-1.5">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-3 w-40" />
                    <Skeleton className="h-3 w-28" />
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3 mb-4" />

                  <div className="space-y-3 flex-1">
                    <div>
                      <Skeleton className="h-3 w-16 mb-1.5" />
                      <div className="space-y-1">
                        <Skeleton className="h-3 w-full" />
                        <Skeleton className="h-3 w-full" />
                        <Skeleton className="h-3 w-4/5" />
>>>>>>> 9fd907040beb710066b15e036886308ab83f2ec8
                      </div>
                    </div>

                    <div>
<<<<<<< HEAD
                      <Skeleton className="h-4 w-24 mb-2" />
                      <div className="flex gap-2">
                        <Skeleton className="h-6 w-16 rounded" />
                        <Skeleton className="h-6 w-20 rounded" />
                        <Skeleton className="h-6 w-24 rounded" />
                        <Skeleton className="h-6 w-16 rounded" />
=======
                      <Skeleton className="h-3 w-16 mb-1.5" />
                      <div className="flex flex-wrap gap-1.5">
                        <Skeleton className="h-5 w-14 rounded" />
                        <Skeleton className="h-5 w-16 rounded" />
                        <Skeleton className="h-5 w-20 rounded" />
                        <Skeleton className="h-5 w-12 rounded" />
>>>>>>> 9fd907040beb710066b15e036886308ab83f2ec8
                      </div>
                    </div>
                  </div>

<<<<<<< HEAD
                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-9 w-28 rounded" />
=======
                  <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
                    <Skeleton className="h-3 w-16" />
                    <Skeleton className="h-8 w-8 rounded" />
>>>>>>> 9fd907040beb710066b15e036886308ab83f2ec8
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
