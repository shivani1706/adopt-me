import React from 'react';

export default function Landing() {
  return <div className='pet-image text-black py-32  text-right px-9'>
      <div className='font-serif font-extrabold text-5xl mt-1 mb-2'>Get Personalized Pet Matches</div>
      <div className='text-xl my-2 font-bold'>Watch available pets to see your perfect matches on ADOPT ME!</div>
      <button className="rounded-full bg-purple-800 hover:bg-purple-300 px-2 py-2 mr-96 ml-96 my-6 font-bold text-lg outline outline-offset-2 outline-purple-400 hover:outline-purple-800"><a href='/pets'>GET STARTED</a></button>
  </div>;
}
