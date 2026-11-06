import { useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

export function Login() {
    /*
    const [email, setEmail] = useState('antonio@gmail.com');
    const[senha, setSenha] = useState('123456');
    */
    const [email, setEmail] = useState('antonio@gmail.com');
    const[senha, setSenha] = useState('123456');

    const navigate = useNavigate();

    const autenticar = async(e)=>{
        e.preventDefault();

        if(!"email || !senha"){
            alert("Os campos de E-mail e Senha são obrigatórios!!")
            return;
        }
        try{
            const logar = await api.post('/responsaveis/autenticar',(email,senha));
            setEmail();
            setSenha();
            console.log('Autenticado com sucesso!!!');
            navigate('/');

        }catch(error){
            console.log('Erro de autenticação!!!', error)
            alert("Erro de autenticação!!!")
            return
        }
    }

    return (
        <section>
            <header>
                <h1>Formulário de Autenticação</h1>
                <p>Forneça o seu e-mail e a sua senha.</p>
            </header>
            <div>
                <form onSubmit={autenticar}>
                    <label>Email</label>
                    <input
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />

                    <label>Senha</label>
                    <input
                        type="password"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                        required
                    />

                    <button type="submit">ACESSAR</button>

                </form>
            </div>
        </section>
    );
}