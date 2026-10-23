import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Menu } from './components/Header/Menu';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Tarefas } from './pages/Tarefas';
import { Responsaveis } from './pages/Responsaveis';
import { Perfil } from './pages/Perfil';
import { Home } from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Menu />

        <main>
          <Routes>
            <Route path='/' element = {<Home />}/>
            <Route path='/tarefas' element = {<Tarefas />}/>
            <Route path='/responsaveis' element = {<Responsaveis />}/>
            <Route path='/perfil' element = {<Perfil />}/>
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
