
import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { useFirebase } from '../context/Firebase';
import { useNavigate } from "react-router-dom";
const DetailPage = () => {
  const navigate = useNavigate()
    const params = useParams();
    const firebase = useFirebase();
    const [data,setData] = useState(null);
    const [url,setURL]= useState(null);
    // console.log(params);
    useEffect(() => {
      firebase.getPetById(params.petId).then((value)=>setData(value.data()))
    }, []);

    useEffect(() => {
      if(data){
        const imageURL = data.imageURL;
        firebase.getImageURL(imageURL).then((url)=>setURL(url));
      }
    }, [data])
    
    const placeOrder=async ()=>{
      const result = await firebase.placeOrder(params.petId);
      alert("Request for adoption placed successfully!!");
      navigate("/");
    }

    if(data==null)return <h1>Loading...</h1>
    
  if(!firebase.isLoggedIn)return <div role="alert " className='mx-96 my-48'>
  <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
    Error
  </div>
  <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700 ">
    <p>You are not logged in. Please log in first</p>
  </div>
</div>
  return (
    <div className='container'>
        <div class="max-w-sm w-full lg:max-w-full lg:flex rounded mx-10 my-5">
        <img class="w-full " src={url} alt="pet image"/>
        <div class="px-20 py-0">
    <div class="font-bold text-4xl mb-5">{data.name} ({data.animal})</div>
    <p class="text-gray-700 text-xl  my-3">
      Address : <br></br>{data.address} , {data.city} , {data.state} , {data.zip}
      
    </p>
    <p class="text-gray-700 text-base">
      Uploaded by : <br></br>{data.displayName} 
      
    </p>
    <p class="text-gray-700 text-base my-5">
      For adopting, contact at  : <br></br>{data.userEmail} 
      
    </p>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{data.animal}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{data.name}</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#adopt</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#free_of_cost</span>

    <br></br>
    <button onClick={placeOrder} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5">
  ADOPT ME
</button>
  </div>
  <div class="px-6 pt-4 pb-2">
    
  </div>
  
    </div>
</div>
    
  )
}

export default DetailPage