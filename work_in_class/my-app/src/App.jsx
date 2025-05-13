import { useState } from 'react'
import ClassComponent from './ClassComponent'
import FuncComponent from './FuncComponent'
import Todos from './todos/Todos'
import Users from './Users'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <FuncComponent />
    <ClassComponent />
    <Todos />
    <Users />
    </>
  )
}

export default App
