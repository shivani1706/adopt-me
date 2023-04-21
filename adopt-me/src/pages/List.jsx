import React,{useState} from 'react';
import {useFirebase} from '../context/Firebase';
import { useNavigate } from "react-router-dom";
const ListingPage = () =>{
  const navigate = useNavigate()
const firebase = useFirebase();
const [name,setName]=useState('');
const [animal,setAnimal]=useState('');
const [city,setCity]=useState('');
const [state,setState]=useState('');
const [zip,setZip]=useState('');
const [address,setAddress]=useState('');
const [photo,setPhoto]=useState('');

const handleSubmit= async(e)=>{
    e.preventDefault();
    await firebase.handleCreateNewListing(name,animal,address,city,state,zip,photo)
    alert("Pet details uploaded successfully!!");
    navigate("/");
};


  if(!firebase.isLoggedIn)return <div role="alert " className='mx-96 my-48'>
  <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
    Error
  </div>
  <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700 ">
    <p>You are not logged in. Please log in first</p>
  </div>
</div>
    return(
        <div>
            <form  onSubmit={handleSubmit}  className="bg-white shadow-md rounded px-24 pt-6 pb-8 pt-8 mb-8 mt-8 mb-4 mx-96">


    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Pet Name
      </label>
      
      <input onChange={(e)=>setName(e.target.value)} value={name} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  id="email" type="text" placeholder="Tommy"/>
    </div>


    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Animal
      </label>
      
      <input onChange={(e)=>setAnimal(e.target.value)} value={animal} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  id="email" type="text" placeholder="Dog"/>
    </div>


    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Address
      </label>
      
      <input onChange={(e)=>setAddress(e.target.value)} value={address} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  id="email" type="text" placeholder="Street"/>
    </div>


    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        City
      </label>
      
      <input onChange={(e)=>setCity(e.target.value)} value={city} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  id="email" type="text" placeholder="City"/>
    </div>


    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        State
      </label>
      
      <input onChange={(e)=>setState(e.target.value)} value={state} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  id="email" type="text" placeholder="State"/>
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Zip Code
      </label>
      
      <input onChange={(e)=>setZip(e.target.value)} value={zip} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  id="email" type="text" placeholder="pin code"/>
    </div>

    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Photo
      </label>
      
      <input onChange={(e)=>setPhoto(e.target.files[0])}  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  id="email" type="file" />
    </div>


    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Upload
      </button>
    </div>


  </form>
        </div>
    )
}

export default ListingPage;