import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { useFirebase } from '../context/Firebase';
const ViewOrderDetails = () => {
    const params = useParams();
    console.log("here are my params")
    console.log(params);
    const firebase=useFirebase();
    const [orders,setOrders] = useState([]);
    useEffect(() => {
    firebase.getOrders(params.bookId).then((orders)=>setOrders(orders.docs));
      
    }, [])
    
  if(!firebase.isLoggedIn)return <div role="alert " className='mx-96 my-48'>
  <div class="bg-red-500 text-white font-bold rounded-t px-4 py-2">
    Error
  </div>
  <div class="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700 ">
    <p>You are not logged in. Please log in first</p>
  </div>
</div>
  return (

    <>
      <div className="container">
        <h1 className="mt-3">Orders</h1>
        {orders.map((order, index) => {
          const data = order.data();
          return (
            <div key={index} className="mt-5 p-3 mb-5" style={{border: "1px solid"}}>
              <h4>Ordered By: {data.displayName}</h4>
              {/* <h5>Quantity: {data.quantity}</h5> */}
              <p>Email: {data.userEmail}</p>
            </div>
          );
        })}
      </div>
    </>



    // <div className='container'>
    //     <h1>Orders</h1>
    //     orders.map((order) => {
    //         const data = order.data();
    //         return(
    //             <div>Requested By: {DataTransfer.displayName}</div>
    //         )
    //     }

    //     )
    // </div>
  )
}

export default ViewOrderDetails