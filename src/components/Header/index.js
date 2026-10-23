import './index.css'
import logo from './img/logo.jpg'


function Header() {
    return (
        <header className='headerTopo'>
            <div className='headerTopoLogo'>
                <img src={logo} alt='Logotipo do Site' title = 'Logotipo do Site'/>
            </div>
            <div className='headerTopoTitulo'>
                <h1>Gerenciador de Tarefas - SENAC 2026</h1>
            </div>
        </header>
    )
}
export default Header;