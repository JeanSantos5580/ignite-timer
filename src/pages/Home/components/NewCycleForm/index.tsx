import { useFormContext } from 'react-hook-form'
import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { useContext } from 'react'
import { CyclesContext } from '../../../../Contexts/CyclesContext'

export default function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        {...register('task')}
        id="task"
        list="task-suggestions"
        placeholder="Dê um nome para a sua tarefa."
        disabled={!!activeCycle}
      />
      <datalist id="task-suggestions">
        <option value={'Projeto front-end'}></option>
        <option value={'Projeto back-end'}></option>
        <option value={'Projeto full-stack'}></option>
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        {...register('minutesAmount', {
          valueAsNumber: true,
        })}
        disabled={!!activeCycle}
        type="number"
        id="minutesAmount"
        placeholder="00"
        max={60}
        min={5}
        step={5}
      />
      <span>minutos.</span>
    </FormContainer>
  )
}
