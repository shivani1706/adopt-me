import React from 'react';
import { useFirebase } from '../../context/Firebase';
function Nav() {
  const firebase = useFirebase();
  return <div className='flex px-28 py-5 text-white bg-slate-900 text-xl'>
      <div className='mr-96 font-bold cursor-pointer'>AD<i className="fas fa-paw "></i>PT ME!</div>
      <div className='mx-8 cursor-pointer'><a href='/'>HOME</a></div>
      <div className='mx-8 cursor-pointer'><a href='/pets'>ADOPT</a></div>
      <div className='mx-8 cursor-pointer' ><a href='/pet/list'>UPLOAD </a></div>
      <div className='mx-8 cursor-pointer '><a href='/pet/orders'>REQUESTS</a></div>
      
      <div className='mx-8 cursor-pointer '><a href="/register"
                  onClick={() => {
                    firebase.logOut();
                  }}>LOGIN/LOGOUT</a></div>
  </div>;
}

export default Nav;


