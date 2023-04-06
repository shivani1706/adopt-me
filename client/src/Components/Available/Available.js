import React from 'react';

export default function Available() {
  return <div className='my-28'>
      <div className='text-center text-5xl font-mono  font-semibold text-slate-900'>Pets available for Adoption nearby</div>
      <div className='flex py-10 px-36'>
          <div className='box-border h-64 w-56 p-4 mx-auto border-4 rounded-lg pet-image1 '></div>
          <div className='box-border h-64 w-56 p-4 mx-auto border-4 rounded-lg pet-image2'></div>
          <div className='box-border h-64 w-56 p-4 mx-auto border-4 rounded-lg pet-image3'></div>
          <div className='box-border h-64 w-56 p-4 mx-auto border-4 rounded-lg pet-image4'></div>
      </div>
  </div>;
}
