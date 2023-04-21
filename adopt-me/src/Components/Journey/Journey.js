import React from 'react';
import Dog from '../Journey/dog.jpeg';
export default function Journey() {
  return <div className="grid grid-cols-2  bgdogcolor justify-center items-center">
    <div >
        <div className='ml-24 mr-0 '>
        <img src={Dog} alt="Dog Logo" />
        </div>
    </div>
    <div className='mr-4 ml-0 text-xl'>
        <div className='text-3xl mt-4 mb-2 font-bold'><i className="fas fa-search"></i> Search Pet</div>
        <div className='mb-6'>Adopt a dog or cat who's right for you. Simply enter your city above to start your search.</div>
        <div className='text-3xl mt-4 mb-2 font-bold'><i className="fas fa-phone-volume"></i> Connect</div>
        <div className='mb-6'>Once you find a pet, click "show number" to get contact info for their pet parent or rescue. Contact them to learn more about how to meet and adopt the pet.</div>
        <div className='text-3xl mt-4 mb-2 font-bold'><i className="far fa-kiss-wink-heart"></i> AdoptLove</div>
        <div className='mb-6'>The rescue or pet parents will walk you through their adoption process. Prepare your home for the arrival of your fur baby to help them adjust to their new family.</div>
        <div className='text-3xl mt-4 mb-2 font-bold'><i className="fas fa-syringe"></i> Free Vet Consultation</div>
        <div className='mb-6'>ThePetNest will help your pet to settle down in its new home, once you complete the Adoption journey reach out to us for free vet consultation.</div>
    </div>
  </div>;
}
