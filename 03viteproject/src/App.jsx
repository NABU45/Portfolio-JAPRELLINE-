import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-col lg:flex-row justify-center items-center'>
        <div href="https://vitejs.dev" target="_blank" className='flex flex-row justify-center'>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </div>
        <a href="https://react.dev" target="_blank" class="flex flex-row justify-center">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="flex flex-col lg:flex-row justify-center">
        <h1>Vite + React</h1>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className="card flex flex-col lg:flex-row items-baseline border border-gray-400 ">
        <p className='text-green-600 hover:bg-slate-300 hover:text-white transition cursor-pointer justify-center '>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <p className="read-the-docs text-rose-700 sm:text-sm ml-14 lg:text-4xl  hover:text-green-900">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  )
}

export default App