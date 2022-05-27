import { Route, Routes } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import "./App.scss"
import "./index.css"
import Layout from "./components/Layout"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Skill from "./components/Skills"

function App() {
  const history = createBrowserHistory();
  return (
    <div>
      <Routes history={history}>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path="/contact" element={<Contact/>} />
          <Route path="/skill" element = {<Skill/>} />
        </Route>
      </Routes>
    </div>
    
  );
}

export default App;
