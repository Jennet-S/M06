import { useState } from 'react'
import './App.css'
import Greeting from './Components/Greeting'

function App() {

  return (
    <>
      <div className='exercise-1'>
        <Greeting name=""></Greeting>
        <Greeting name="John"></Greeting>
      </div>
    </>
  )
}

export default App
