import { useEffect, useState } from 'react';
import './index.css';
import api from '../../services/api';
import { Link } from 'react-router-dom';



export function Tarefas() {

    const [tarefas, setTarefas] = useState([]);

    const buscarTarefa = async () => {
        try {
            const resposta = await api.get("/tarefas");
            setTarefas(resposta.data);
            console.log(resposta.data);
        } catch (error) {
            console.log("Erro ao buscar serviço: " + (error.response?.data?.mensagem || error.message));
        } finally {
            console.log("Busca de tarefas finalizada.");
        }
    }
    useEffect(() => {
        buscarTarefa()
    }, []);

    return (
        <section className='sectionTarefas'>
            <h1>Tarefas</h1>

            <table className='tableTarefas'>
                <thead>
                    <th>#</th>
                    <th>Tarefa</th>
                    <th>RESPONSÁVEL</th>
                    <th>STATUS</th>
                    <th>AÇÃO</th>
                </thead>
                <tbody>
                    {
                        tarefas.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.titulo}</td>
                                    <td>{item.responsavel.nome}</td>
                                    <td>{item.status}</td>
                                    <td>
                                        <Link to={`/detalheTarefa/${item.id} `} >[VISUALIZAR]</Link>
                                        <Link to={`/editarTarefa/${item.id} `}>[EDITAR]</Link>
                                        <Link to={`/excluirTarefa/${item.id} `}>[EXCLUIR]</Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

        </section>
    )
}