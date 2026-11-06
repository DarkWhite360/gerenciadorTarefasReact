import { useParams } from "react-router-dom";
import "./index.css"
import { useState } from "react";
import { preconnect } from "react-dom";
import api from "../../services/api";

export function CadastrarTarefa(){

    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [observacao, setObservacao] = useState('');
    const [preco, setPreco] = useState('');
    const [prioridade, setPrioridade] = useState('');
    const [dataLimite, setDataLimite] = useState('');
    const [responsavel, setResponsavel] = useState(1);

    const cadastrarTarefa= async(e)=>{
        e.preventDefault();
        
        if(!titulo || !descricao || !observacao || !preco || !prioridade || !dataLimite || !responsavel){
            alert("Atenção", "Os campos são obrigatórios");
            return;
        }

        const id_responsavel = responsavel;

        try{
            await api.post("/tarefa", {
                titulo, 
                descricao,
                observacao,
                preco: Number(preco),
                prioridade,
                dataLimite, 
                id_responsavel : Number(responsavel), 
            });

            alert("Sucesso", "Tarefa cadastrada com sucesso!");

        } catch(error){
            console.log(error);
            alert(error.response?.data?.mensagem || "Não foi possível cadastrar a tarefa.");
        }
    }

    return(
        <section>
            <header>
                <h1>Formulário para Cadastro de Tarefas</h1>
            </header>    
            <div>
                <form onSubmit={cadastrarTarefa}>

                    <label>Titulo:</label>
                    <input
                        placeholder='Informe o nome: Ex: José da Silva'
                        type = 'text'
                        value={titulo}
                        onChange={e=>setTitulo(e.target.value)}
                        required
                    />

                    <label>Descrição:</label>
                    <textarea
                        placeholder='Descreva a tarefa'
                        value={descricao}
                        onChange={e=>setDescricao(e.target.value)}
                        required
                    />

                    <label>Observação:</label>
                    <textarea
                        placeholder='Observações a serem feitas'
                        value = {observacao}
                        onChange={e=>setObservacao(e.target.value)}
                        required
                    />
                    
                    <label>Preço:</label>
                    <input
                        placeholder='Informe o valor: Ex: 0.00'
                        type = 'number'
                        step={0.01}
                        value={preco}
                        onChange={e=>setPreco(e.target.value)}
                        required
                    />

                    <label>Prioridade:</label>
                    <input
                        placeholder=''
                        type = 'text'
                        value={prioridade}
                        onChange={e=>setPrioridade(e.target.value)}
                        required
                    />

                    <label>Data Limite:</label>
                    <input
                        placeholder='Informe a data de entrega: Ex: dd/mm/YYYY'
                        type = 'date'
                        value={dataLimite}
                        onChange={e=>setDataLimite(e.target.value)}
                        required
                    />

                    {/** 
                    <label>Responsável:</label>
                    <input
                        placeholder='Informe o nome: Ex: José da Silva'
                        type = 'text'
                        value={titulo}
                        onChange={e=>setTitulo(e.target.value)}
                        required
                    />
                    */}
                    <button type='submit'>Salvar</button>

                </form>
                <div>
                    <p>{titulo}</p>
                    <p>{descricao}</p>
                    <p>{observacao}</p>
                    <p>{preco}</p>
                    <p>{prioridade}</p>
                    <p>{dataLimite}</p>
                    
                </div>
            </div>
        </section>
    )
}