import './index.css';

export function Perfil({onLogout}){
    
    //receber usuario logado - localStorage
    const handleLogout =()=>{
        onLogout();
        alert("Você saiu da sua conta!!");
    }

    return(
        <section className = 'sectionPerfil'>
            <h1>Perfil</h1>

            <button onClick={handleLogout}>Sair</button>
        </section>
    )
}