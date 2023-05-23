import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Resort from './components/Resort';
import Resortview from './components/Resortview';
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Header/>
     <Routes>
        <Route path ='/' element={<Resort/>}/>
        <Route path='/view-resort/:id' element ={  <Resortview/>}/>
     </Routes>
    
     <Footer/>
    </div>
  )
}

export default App;
