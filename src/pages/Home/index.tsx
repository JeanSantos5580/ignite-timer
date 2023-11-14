import { Play } from '@phosphor-icons/react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles'
import { useState } from 'react'

export function Home() {
  const [task, setTask] = useState('')
  const [minutesAmount, setMinutesAmount] = useState(0)

  console.log(task, minutesAmount)

  const disableButton = !task && minutesAmount < 5

  return (
    <HomeContainer>
      <form>
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            type="text"
            name=""
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para a sua tarefa."
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />
          <datalist id="task-suggestions">
            <option value={'Projeto front-end'}></option>
            <option value={'Projeto back-end'}></option>
            <option value={'Projeto full-stack'}></option>
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            name=""
            id="minutesAmount"
            placeholder="00"
            step={5}
            max={60}
            min={5}
            onChange={(e) => setMinutesAmount(Number(e.target.value))}
            value={minutesAmount}
          />
          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton
          type="submit"
          title="Preencha o nome e a duração antes de começar."
          disabled={disableButton}
        >
          <Play size={20} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
