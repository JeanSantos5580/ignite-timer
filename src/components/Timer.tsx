import { Play } from '@phosphor-icons/react'
import { Box } from './Timer.styles'

export function Timer() {
  return (
    <Box>
      <header>
        Vou trabalhar em
        <input type="text" name="" id="" />
        durante
        <input type="number" name="" id="" />
      </header>
      <article>
        <div>00:00</div>
        <button>
          <Play size={20} />
          Começar
        </button>
      </article>
    </Box>
  )
}
