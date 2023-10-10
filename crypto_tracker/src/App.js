
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import DisplayPage from './Pages/DisplayPage';
import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App" >

     <BrowserRouter>
     <Header/>
      <Routes>
      <Route path='/' element={<Home/>} exact />
      <Route path='/coins/:id' element={<DisplayPage/>} />
      </Routes>
     </BrowserRouter>

     <Footer/>

    </div>
  );
}

export default App;
