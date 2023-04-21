import React from 'react';

export default function Upload() {
  return <div className='pet-image6 text-white mx-60 py-32 px-24  text-center px-9'>
      <div className='text-xl mb-12 italic'>Approximately 1478 dogs & cats die every day on road in India. Adopt Me! is on a mission to provide every dog and cat a home before 2035. It’s just one of the many ways Adopt Me! gives back and helps you become a part of something larger. Join Adopt Me! Community and help setting up Pet houses in your surrounding for strays.</div>
      <div className='font-serif font-extrabold text-5xl mt-1 mb-2 my-3'>Are you also worried about dogs of your locality</div>
      <div className='text-xl my-2 font-bold'>Upload the details here and help them find a new home <i className="fas fa-home"></i></div>
      <button className="rounded-full bg-purple-800 hover:bg-purple-300 px-4 py-2 mr-96 ml-96 my-6 font-semibold text-lg outline outline-offset-2 outline-purple-400 hover:outline-purple-800 hover:text-black"><a href='/pet/list'>UPLOAD</a></button>
  </div>;
}
