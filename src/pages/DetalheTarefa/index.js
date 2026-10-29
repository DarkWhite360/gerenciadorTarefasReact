import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import api from '../../services/api';
import "./index.css"

export function DetalheTarefa() {

    const { id } = useParams();

    const [tarefas, setTarefas] = useState([]);

    const buscarTarefa = async () => {
        try {
            const resposta = await api.get(`/tarefas/${id}`);
            setTarefas(resposta.data.tarefa);
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
        <section>
            <header>
                <h1>{tarefas.titulo}</h1>
            </header>
            <p>Responsavel: {tarefas.responsavel?.nome || " "}</p>
        </section>
    )
}