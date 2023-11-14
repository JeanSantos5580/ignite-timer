import { HistoryContainer, HistoryList, TaskStatus } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h2>Meu histórico</h2>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Aula de JS</td>
              <td>30 minutos</td>
              <td>Há cerca de 1 semana</td>
              <td>
                <TaskStatus statusColor="green">Concluído</TaskStatus>
              </td>
            </tr>
            <tr>
              <td>Aula de JS</td>
              <td>30 minutos</td>
              <td>Há cerca de 1 semana</td>
              <td>
                <TaskStatus statusColor="red">Interrompido</TaskStatus>
              </td>
            </tr>
            <tr>
              <td>Aula de JS</td>
              <td>30 minutos</td>
              <td>Há cerca de 1 semana</td>
              <td>
                <TaskStatus statusColor="yellow">Em andamento</TaskStatus>
              </td>
            </tr>
            <tr>
              <td>Aula de JS</td>
              <td>30 minutos</td>
              <td>Há cerca de 1 semana</td>
              <td>
                <TaskStatus statusColor="green">Concluído</TaskStatus>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
