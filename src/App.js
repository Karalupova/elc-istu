import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Routes, Link} from "react-router-dom";
import Mainpage from "./components/MainPage/Mainpage";
import Centre from "./components/Centre/Centre";
import Documents from "./components/Documents/Documents";
import Login from "./components/Login/login";
import News from "./components/News/News";
import Adminnews from "./components/AdminNews/Adminnews";



function App() {
    return (
            <div className='app-wrapper'>
                              <Routes>
                    <Route exact path="/" element={<Mainpage />}/>
                    <Route path="/centre" element={<Centre />}/>
                    <Route path="/documents" element={<Documents />}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/adminnews" element={<Adminnews/>}/>

                </Routes>
       <Footer/>

            </div>
)
}

export default App;
