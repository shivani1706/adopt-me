import React from 'react';

export default function Working() {
  return <div className=" my-24 mx-24">
  <div className='text-center text-5xl font-bold text-slate-900'>HOW IT WORKS ?</div>
    <div className="grid grid-cols-3   justify-center items-center my-24 mx-10   text-xl">
        <div className='justify-center items-center text-center'>
            <div><i className="fas fa-search fa-2x"></i></div>
            <div className='text-2xl mt-6 mb-2 font-semibold'>Search</div>
            <div>Simply enter your city start your search</div>
        </div>
        <div className='justify-center items-center text-center'>
            <div><i className="far fa-comment-dots fa-3x"></i></div>
            <div className='text-2xl mt-6 mb-2 font-semibold'> Meet</div>
            <div>Schedule your appointment to meet the pet you love</div>
        </div>
        <div className='justify-center items-center text-center'>
            <div><i className="fas fa-shopping-cart fa-2x"></i></div>
            <div className='text-2xl mt-6 mb-2 font-semibold'>Adopt</div>
            <div>Finally adopt the dog or cat you love</div>
        </div>
    </div>
  </div>;
}
