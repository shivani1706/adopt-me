import React from 'react';

function Nav() {
  return <div className='flex px-28 py-5 text-white bg-slate-900 text-xl'>
      <div className='mr-96 font-bold cursor-pointer'>AD<i class="fas fa-paw "></i>PT ME!</div>
      <div className='mx-8 cursor-pointer'>ABOUT PET ADOPTION</div>
      <div className='mx-8 cursor-pointer'>PET CARE</div>
      <div className='mx-8 cursor-pointer'>HELPING PETS</div>
      <div className='mx-8 cursor-pointer '>VIDEOS</div>
  </div>;
}

export default Nav;
