import {useState } from 'react'
import './App.css'
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Input from './Component/Input/Input';
import Customise from './Component/Customize/Customise';
function App() {

  const [password , setPassword] = useState("");
  
  return (
    <div className="container">
      <Header />
      <Input value={password}/>
      <Customise setPassword={setPassword}/>
      <Footer />
    </div>
  )
}

export default App
