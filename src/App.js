import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route } from "react-router-dom";
import SportsNewsDetails from './NewsDetails/SportsNewsDetails';
import NationalNews from './NewsDetails/NationalNews';
import NationalNewsDetails from './NewsDetails/NationalNewsDetails';
import Footer from './Pages/Shared/Footer';
import InternationalNews from './Category/InternationalNews';
import InternationalNewsDetails from './NewsDetails/InternationalNewsDetails';
import ScienceNews from './Category/ScienceNews';
import ScienceNewsDetails from './NewsDetails/ScienceNewsDetails';
import SportNewsSliding from './SlidingNews/SportNewsSliding';
import NationalNewsSliding from './SlidingNews/NationalNewsSliding';
import InternationalNewsSliding from './SlidingNews/InternationalNewsSliding';
import ScienceNewsSliding from './SlidingNews/ScienceNewsSliding';
import ShowAllNews from './Category/ShowAllNews';
import Login from './Pages/Login/Login';
import ReqireAuth from './Pages/Login/ReqireAuth';
import Dashboard from './Pages/Dhasboard/Dashboard';
import SignUp from './Pages/Login/SignUp';
import SportNews from './Category/SportNews';
import Post from './Pages/Dhasboard/Post';
import Main from './Pages/Dhasboard/Main';
import UpdateNews from './Pages/Dhasboard/UpdateNews';
import SearchResult from './Pages/Home/SearchResult';
function App() {
  return (
    <div className="App lg:mx-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} >
            <Route index element={<SportNewsSliding/>}></Route>
            <Route path="national" element={<NationalNewsSliding/>}></Route>
            <Route path="international" element={<InternationalNewsSliding/>}></Route>
            <Route path="science" element={<ScienceNewsSliding/>}></Route>
        </Route>
        <Route path="sportsnews" element={<SportNews />} />
        <Route path="/sportnews/:sId" element={<SportsNewsDetails/>}/>
        <Route path="/nationalsnews" element={<NationalNews/>}/>
        <Route path="nationaldetails/:naId" element={<NationalNewsDetails></NationalNewsDetails>}></Route>
        <Route path="/internationalnews" element={<InternationalNews/>}/>
        <Route path="/internationalnews/:iaId" element={<InternationalNewsDetails/>}/>
        <Route path="/sciencenews" element={<ScienceNews/>}/>
        <Route path="/sciencenews/:saId" element={<ScienceNewsDetails/>}/>
        <Route path="/allnews" element={<ShowAllNews/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="signup" element={<SignUp/>}/>
       
        <Route path="/search/:query" element={<SearchResult></SearchResult>}></Route>

        <Route path="/dashboard" element={
          <ReqireAuth>
            <Dashboard />
          </ReqireAuth>
          } >
             <Route index element={<Main></Main>}></Route>
             <Route path="/dashboard/newslist" element={<Main></Main>}></Route>
             <Route path="/dashboard/newspost" element={<Post></Post>}></Route>
             <Route path="/dashboard/update/:uId" element={<UpdateNews></UpdateNews>}></Route>
        </Route>

        
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
