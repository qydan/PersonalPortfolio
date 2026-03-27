export default function FilterBar({ tags, activeFilter, onFilterChange }) {
  const allTags = ['All', ...tags]

  return (
    <div className="flex flex-wrap gap-2">
      {allTags.map((tag) => (
        <button
          key={tag}
          onClick={() => onFilterChange(tag)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
            activeFilter === tag
              ? 'bg-red-500 text-white'
              : 'border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-red-500 hover:text-red-500'
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  )
}
