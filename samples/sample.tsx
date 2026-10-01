import { useState } from 'react'

type Cupcake = {
  id: number
  flavour: 'strawberry' | 'vanilla' | 'raspberry'
  sprinkles: boolean
}

const MAX_BOX = 6

export function CupcakeBox({ cupcakes }: { cupcakes: Cupcake[] }) {
  const [picked, setPicked] = useState<number[]>([])

  const toggle = (id: number) => {
    setPicked((ids) => (ids.includes(id) ? ids.filter((i) => i !== id) : [...ids, id]))
  }

  return (
    <ul className="cupcake-box">
      {cupcakes.slice(0, MAX_BOX).map((cake) => (
        <li key={cake.id} onClick={() => toggle(cake.id)}>
          {cake.flavour} {cake.sprinkles && '✨'}
        </li>
      ))}
    </ul>
  )
}
