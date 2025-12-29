'use client';

import { useRef, useState, useEffect } from 'react';

interface Category {
  id: string;
  name: string;
  profession: string;
}

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string | null) => void;
}

export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
  };

  useEffect(() => {
    checkScrollability();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollability);
      const resizeObserver = new ResizeObserver(checkScrollability);
      resizeObserver.observe(container);
      
      return () => {
        container.removeEventListener('scroll', checkScrollability);
        resizeObserver.disconnect();
      };
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 300;
    const currentScroll = scrollContainerRef.current.scrollLeft;
    const targetScroll = direction === 'left' 
      ? currentScroll - scrollAmount 
      : currentScroll + scrollAmount;
    
    scrollContainerRef.current.scrollTo({
      left: targetScroll,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative">
      {canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full p-2 shadow-md hover:bg-gray-50 hover:shadow-lg transition-all"
          aria-label="Scroll left"
        >
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}
      <div
        ref={scrollContainerRef}
        className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth px-10 py-1"
        onScroll={checkScrollability}
      >
        <button
          onClick={() => onSelectCategory(null)}
          className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wide whitespace-nowrap transition-all flex-shrink-0 ${
            selectedCategory === null
              ? 'bg-gray-900 text-white shadow-sm'
              : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:bg-gray-50'
          }`}
        >
          Todos
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wide whitespace-nowrap transition-all flex-shrink-0 ${
              selectedCategory === category.id
                ? 'bg-gray-900 text-white shadow-sm'
                : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:bg-gray-50'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
      {canScrollRight && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-gray-200 rounded-full p-2 shadow-md hover:bg-gray-50 hover:shadow-lg transition-all"
          aria-label="Scroll right"
        >
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}
