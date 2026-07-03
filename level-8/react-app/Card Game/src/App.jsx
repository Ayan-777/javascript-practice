import { useState } from 'react'
// import MemoryCard from './MemoryGame'
// import Experiment from './Experiment'
import DataFetcher from './DataFetche'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <DataFetcher/>
      {/* <h2>Hello</h2>
      <MemoryCard />
      <Experiment /> */}
    </>
  )

}

export default App
