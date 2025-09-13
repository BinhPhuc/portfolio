import { cn } from "@/lib/utils";

interface SkeletonLoaderProps {
  className?: string;
  variant?: "text" | "avatar" | "card" | "button" | "image";
  lines?: number;
  width?: string;
  height?: string;
}

export function SkeletonLoader({
  className,
  variant = "text",
  lines = 1,
  width,
  height,
  ...props
}: SkeletonLoaderProps) {
  const baseClasses =
    "animate-pulse bg-muted rounded-md relative overflow-hidden";

  const shimmerClasses =
    "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent";

  const variants = {
    text: "h-4 w-full",
    avatar: "h-12 w-12 rounded-full",
    card: "h-48 w-full",
    button: "h-10 w-24",
    image: "h-32 w-full",
  };

  if (variant === "text" && lines > 1) {
    return (
      <div className={cn("space-y-2", className)}>
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={cn(
              baseClasses,
              shimmerClasses,
              variants.text,
              i === lines - 1 && "w-3/4" 
            )}
            style={{ width, height }}
            {...props}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(baseClasses, shimmerClasses, variants[variant], className)}
      style={{ width, height }}
      {...props}
    />
  );
}

export function SkeletonCard() {
  return (
    <div className="p-6 border rounded-lg space-y-4">
      <SkeletonLoader variant="image" height="200px" />
      <div className="space-y-2">
        <SkeletonLoader variant="text" width="60%" />
        <SkeletonLoader variant="text" lines={3} />
      </div>
      <div className="flex items-center space-x-2">
        <SkeletonLoader variant="avatar" />
        <div className="space-y-1">
          <SkeletonLoader variant="text" width="100px" />
          <SkeletonLoader variant="text" width="80px" />
        </div>
      </div>
    </div>
  );
}

export function SkeletonProfile() {
  return (
    <div className="flex items-center space-x-4 p-4">
      <SkeletonLoader variant="avatar" />
      <div className="space-y-2 flex-1">
        <SkeletonLoader variant="text" width="150px" />
        <SkeletonLoader variant="text" width="100px" />
      </div>
    </div>
  );
}
