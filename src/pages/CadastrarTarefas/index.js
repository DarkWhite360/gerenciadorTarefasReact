import "./index.css"
import { useState } from "react";
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

        try{
            const reposta = await api.post("/tarefa", {
                titulo, 
                descricao,
                observacao,
                preco: Number(preco),
                prioridade,
                dataLimite, 
                id_responsavel : Number(responsavel), 
            });

            console.log("Sucesso:", resposta.data);
            alert("Sucesso", "Tarefa cadastrada com sucesso!");

            // Opcional: limpar os campos após o cadastro
            setTitulo('');
            setDescricao('');
            setPreco('');
            setData_limite('');
            setTempo_estimado('');

        } catch(error){
            console.log("Erro na requisição", error);
            // alert(error.response?.data?.mensagem || "Não foi possível cadastrar a tarefa.");

            console.error("Erro completo", error);
            if(error.response){
                // O servidor respondeu com um status de erro (ex: 400, 422, 500)
                console.error("Dados do erro: ", error.response.data);
                console.error("Status do erro: ", error.response.status);
                alert(`Erro ${error.response.status}: ${error.response.data?.message || JSON.stringfy(error.response.data)}`);
            }else if (error.request){
                // A requisição foi feita mas NENHUMA resposta foi recebida (API fora do ar ou CORS bloqueando o POST)
                console.error("Nenhuma resposta recebida: ", error.message)
                alert("A API não respondeu. Verifique se o servidor backend está rodando");
            } else {
                // Erro ao configurar a requisição
                console.error("Erro de configuração: ", error.message);
                alert("Erro ao enviar requisição: " + error.message);
            }

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