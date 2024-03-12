export const LoadingCard = () => {
  return (
    <div className="flex items-center p-4 bg-white border rounded-lg shadow-xs dark:border-gray-700 dark:bg-gray-800">
      <div className="animate-pulse flex space-x-4 w-full">
        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  )
}