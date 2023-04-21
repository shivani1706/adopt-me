import React,{useState,useEffect} from 'react';
import { useFirebase } from '../../context/Firebase';
import { useNavigate } from 'react-router-dom';
const PetCard = (props) =>{
    const firebase = useFirebase();
    const navigate=useNavigate();
    const [url,setURL]= useState(null);
    useEffect(() => {
      firebase.getImageURL(props.imageURL).then((url)=>setURL(url));
    }, [])
    

return (
    <div class="max-w-sm w-full lg:max-w-full lg:flex rounded mx-64">
        <img class="w-full" src={url} alt="pet image"/>
        <div class="px-20 py-0">
    <div class="font-bold text-xl mb-2">{props.name} ({props.animal})</div>
    <p class="text-gray-700 text-base ">
      Address : {props.address} , {props.city} , {props.state} , {props.zip}
      
    </p>
    <p class="text-gray-700 text-base">
      Uploaded by : {props.displayName} 
      
    </p>
    <p class="text-gray-700 text-base">
      For adopting, contact at  : {props.userEmail} 
      
    </p>
  </div>
  {/* <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{props.animal}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{props.name}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#adopt</span>
    
  </div> */}
  <div class="px-6 pt-4 pb-2 my-5">
  <button onClick={(e)=>navigate(props.link)} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  View
</button>
  </div>
    </div>









    /* <div class="max-w-sm rounded overflow-hidden shadow-lg my-4 ">
  <img class="w-full" src={url} alt="pet image"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{props.name}</div>
    <p class="text-gray-700 text-base">
      Address : {props.address} , {props.city} , {props.state} , {props.zip}
      
    </p>
    <p class="text-gray-700 text-base">
      Uploaded by : {props.displayName} 
      
    </p>
    <p class="text-gray-700 text-base">
      For adopting, contact at  : {props.userEmail} 
      
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{props.animal}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{props.name}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#adopt-me</span>
  </div>
</div> */



  
);
};

export default PetCard;