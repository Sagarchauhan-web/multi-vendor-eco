import { Category } from '@/payload-types';
import Link from 'next/link';
import React from 'react';

interface Props {
  category: Category;
  isOpen: boolean;
  position: { top: number; left: number };
}

const SubcategoryMenu = ({ category, isOpen, position }: Props) => {
  if (
    !isOpen ||
    !category.subcategories ||
    (category.subcategories as Category[]).length === 0
  )
    return null;

  const backgroundColor = category.color || '#f5f5f5';

  return (
    <div
      className='fixed z-100'
      style={{
        top: position.top,
        left: position.left,
      }}
    >
      {/* Invisible bridge to maintain hover */}
      <div className='h-3 w-60' />

      <div
        style={{ backgroundColor }}
        className='w-60 text-black rounded-md overflow-hidden border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -translate-x-[2px] -translate-y-[2px]'
      >
        <div>
          {(category.subcategories as Category[]).map(
            (subcategory: Category) => (
              <Link
                key={subcategory.slug}
                href='/'
                className='w-full text-left p-4 hover:bg-black hover:text-white flex justify-between items-center underline font-medium'
              >
                {subcategory.name}
              </Link>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default SubcategoryMenu;
