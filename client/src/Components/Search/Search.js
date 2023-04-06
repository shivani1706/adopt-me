import React from 'react';

export default function Search() {
  return <div className='flex mx-36 bg-slate-900 text-white text-2xl py-2  font-serif'>
  <div className='mx-auto my-4 cursor-pointer'>Enter City, State or Zip <i class="fas fa-search-location"></i></div><div className='mx-auto my-4'>|</div>
  <div className='mx-auto my-4 cursor-pointer'>Find a Dog <i class="fas fa-dog"></i></div><div className='mx-auto my-4'>|</div>
  <div className='mx-auto my-4 cursor-pointer'>Find a Cat <i class="fas fa-cat"></i></div><div className='mx-auto my-4'>|</div>
  <div className='mx-auto my-4 cursor-pointer'>Find other pets</div>
  </div>;
}
