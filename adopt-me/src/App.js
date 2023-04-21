
import './App.css';
import Journey from './Components/Journey/Journey';
import Landing from './Components/Landing/Landing';
import Navbar from './Components/Navbar/Nav';
import Search from './Components/Search/Search';
import Available from './Components/Available/Available';
import Working from './Components/Working/Working';
import Upload from './Components/Upload/Upload';
import Faq from './Components/FAQ/Faq';
import Footer from './Components/Footer/foot'
import HomePage from './pages/Home';


import {Route,Routes} from "react-router-dom";
import RegisterPage from './pages/Register';
import LoginPage from './pages/Login';
import ListingPage from './pages/List';
import PetsPage from './pages/Pets';
import DetailPage from './pages/Detail';
import OrdersPage from './pages/ViewOrder';
import ViewOrderDetails from './pages/ViewOrderDetail';
import PetsByZipPage from './pages/PetsByZip';
import CatsPage from './pages/Cats';
import DogsPage from './pages/Dogs';
import AnimalsPage from './pages/Animals';
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>
      <Route path='/register' element={<RegisterPage/>}></Route>
      <Route path='/pet/list' element={<ListingPage/>}></Route>
      <Route path='/pets' element={<PetsPage/>}></Route>
      <Route path='/pet/view/:petId' element={<DetailPage/>}></Route>
      <Route path='/pet/orders' element={<OrdersPage/>}></Route>
      <Route path='/pets/orders/:bookId' element={<ViewOrderDetails/>}></Route>
      <Route path='/zip/:pincode' element={<PetsByZipPage/>}></Route>
      <Route path='/cats' element={<CatsPage/>}></Route>
      <Route path='/dogs' element={<DogsPage/>}></Route>
      <Route path='/animals' element={<AnimalsPage/>}></Route>

    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
