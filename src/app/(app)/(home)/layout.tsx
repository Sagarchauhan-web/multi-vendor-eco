import React from 'react';
import { Navbar } from './navbar';
import { Footer } from './footer';
import { SearchFilters } from './search-filters';
import { getPayload } from 'payload';
import configPromise from '@payload-config';
import { Category } from '@/payload-types';

interface Props {
  children: React.ReactNode;
}

const Layout = async ({ children }: Props) => {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    collection: 'categories',
    depth: 1, // Populate subcategories
    pagination: false,
    where: {
      parent: {
        exists: false,
      },
    },
  });

  const formattedData = data.docs.map((doc) => ({
    ...doc,
    subcategories: (doc.subcategories?.docs ?? []).map((subcat) => ({
      // Because of "depth: 1" above, subcategories are already populated
      ...(subcat as Category),
      subcategories: undefined,
    })),
  }));

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <SearchFilters data={formattedData} />
      <div className='flex-1 bg-[#F4F4F0]'>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
