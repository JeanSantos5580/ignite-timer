import { useContext } from 'react'
import { HistoryContainer, HistoryList, TaskStatus } from './styles'
import { CyclesContext } from '../../Contexts/CyclesContext'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function History() {
  const { cycles } = useContext(CyclesContext)

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
            {cycles.map((cycle) => (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td>{cycle.minutesAmount} minutos</td>
                <td>
                  {formatDistanceToNow(new Date(cycle.startDate), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </td>
                <td>
                  {cycle.finishedDate && (
                    <TaskStatus statusColor={'green'}>Concluído</TaskStatus>
                  )}
                  {cycle.interruptedDate && (
                    <TaskStatus statusColor={'red'}>Interrompido</TaskStatus>
                  )}
                  {!cycle.finishedDate && !cycle.interruptedDate && (
                    <TaskStatus statusColor={'yellow'}>Em andamento</TaskStatus>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
