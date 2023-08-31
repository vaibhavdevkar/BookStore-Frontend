import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
// import AddBook from './Components/Addbook'
// import ListofBook from './Components/ListofBook';
import Navbar from './Components/Navbar';
import AddBook from './Components/Addbook';
import ListofBook from './Components/ListofBook';

function App() {
  return (
   <BrowserRouter>
   <Navbar />
   <Routes>
    <Route path='/' element={<ListofBook />} />
    <Route path='/addbook' element={<AddBook />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
