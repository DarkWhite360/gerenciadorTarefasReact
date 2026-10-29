import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Menu } from './components/Header/Menu';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Tarefas } from './pages/Tarefas';
import { Responsaveis } from './pages/Responsaveis';
import { Perfil } from './pages/Perfil';
import { Home } from './pages/Home';
import { DetalheTarefa } from './pages/DetalheTarefa'; 
import { EditarTarefa } from './pages/EditarTarefa';
import { CadastrarTarefa } from './pages/CadastrarTarefas';
 
function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Menu />

        <main className='mainApp'>
          <Routes>
            <Route path='/' element = {<Home />}/>
            <Route path='/tarefas' element = {<Tarefas />}/>
            <Route path='/responsaveis' element = {<Responsaveis />}/>
            <Route path='/perfil' element = {<Perfil />}/>

            <Route path='/cadastrarTarefa' element={<CadastrarTarefa/>}/>
            <Route path='/detalheTarefa/:id' element={<DetalheTarefa/>}/>
            <Route path='/editarTarefa/:id' element={<EditarTarefa/>}/>
            <Route path='/excluirTarefa/:id' element={<Home/>}/>
            
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
