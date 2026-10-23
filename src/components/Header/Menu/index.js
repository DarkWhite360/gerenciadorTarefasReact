import { Link } from 'react-router-dom';
import './index.css'

export function Menu() {
    return (
        <nav className = 'menu'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/tarefas">Tarefas</Link></li>
                <li><Link to="/responsaveis">Responsável</Link></li>
                <li><Link to="/perfil">Perfil</Link></li>
            </ul>
        </nav>
    )
}
