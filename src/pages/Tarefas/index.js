import './index.css';

export function Tarefas() {
    return (
        <section className='sectionTarefas'>
            <h1>Tarefas</h1>

            <table>
                <thead>
                    <th>#</th>
                    <th>Tarefa</th>
                    <th>RESPONSÁVEL</th>
                    <th>STATUS</th>
                    <th>AÇÃO</th>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Tela de Cadastro</td>
                        <td>Antonio</td>
                        <td>EM_ANDAMENTO</td>
                        <td>[VISUALIZAR][EDITAR][EXCLUIR]</td>
                    </tr>
                </tbody>
            </table>

        </section>
    )
}