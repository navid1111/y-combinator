export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse space-y-4 w-full max-w-2xl">
        {/* Header skeleton */}
        <div className="h-8 bg-gray-200 rounded-md w-3/4"></div>

        {/* Content skeleton */}
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 rounded-md w-full"></div>
          <div className="h-4 bg-gray-200 rounded-md w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded-md w-4/6"></div>
        </div>

        {/* Card skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {[1, 2].map(item => (
            <div key={item} className="border rounded-lg p-4 space-y-3">
              <div className="h-4 bg-gray-200 rounded-md w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded-md w-full"></div>
              <div className="h-4 bg-gray-200 rounded-md w-2/3"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
