import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import { Menu } from './components/Header/Menu';
import { Principal } from './pages/Principal';

import { Tarefas } from './pages/Tarefas';
import { Responsaveis } from './pages/Responsaveis';
import { Perfil } from './pages/Perfil';

import { DetalheTarefa } from './pages/DetalheTarefa';
import { EditarTarefa } from './pages/EditarTarefa';
import { CadastrarTarefa } from './pages/CadastrarTarefas';


function Home({ onLogout }) {
    return (

        <div>
            <Header />
            <Menu />

            <main className='mainApp'>
                <Routes>
                    <Route path="/" element={<Principal/>}/>
                    <Route path='/tarefas' element={<Tarefas />} />
                    <Route path='/responsaveis' element={<Responsaveis />} />
                    <Route path='/perfil' element={<Perfil onLogout={onLogout} />} />

                    <Route path='/cadastrarTarefa' element={<CadastrarTarefa />} />
                    <Route path='/detalheTarefa/:id' element={<DetalheTarefa />} />
                    <Route path='/editarTarefa/:id' element={<EditarTarefa />} />
                    <Route path='/excluirTarefa/:id' element={<Principal />} />

                </Routes>
            </main>

            <Footer />
        </div>


    );
}

export default Home;
