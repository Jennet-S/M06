import { useState } from 'react'
import './App.css'
import Greeting from './Components/Greeting'
import BigCats from './Components/BigCats'

function App() {

  return (
    <>
      <div className='exercise-1'>
        <Greeting name=""></Greeting>
        <Greeting name="John"></Greeting>
      </div>

      <div className='exercise-2'>
        <BigCats></BigCats>
      </div>
    </>
  )
}

export default App
