import { Route, Routes } from 'react-router-dom';
import './App.css';
import "./App.scss"
import Layout from "./components/Layout"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Skill from "./components/Skills"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path="/contact" element={<Contact/>} />
          <Route path="/skill" element = {<Skill/>} />
        </Route>

      </Routes>
      hello
    </>
  );
}

export default App;