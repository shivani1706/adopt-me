
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
function App() {
  return (
    <div className="App">
    <Navbar/>
    <Landing/>
    <Search/>
    <Available/>
    <Journey/>
    <Working/>
    <Upload/>
    <Faq/>
    <Footer/>
    </div>
  );
}

export default App;
