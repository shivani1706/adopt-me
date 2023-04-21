import React,{useEffect,useState} from 'react';
import { useFirebase } from '../context/Firebase';
import PetCard from '../Components/Card/Card';
const CatsPage = ()=>{
    const firebase=useFirebase();
    const [pets,setPets]=useState([]);
    useEffect(()=>{
        
        firebase.fetchMyCats().then((pets)=>setPets(pets.docs));
        },[])

        
  if(!firebase.isLoggedIn)return <div role="alert " className='mx-96 my-48'>
  <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
    Error
  </div>
  <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700 ">
    <p>You are not logged in. Please log in first</p>
  </div>
</div>
    return ( <div className='container mt-5' >
    {   
        pets.map((pet)=>(
            <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            <PetCard link={`/pet/view/${pet.id}`} key={pet.id} id={pet.id} {...pet.data()}/>
            </div>
        ))}
    </div>
    );
}

export default CatsPage;