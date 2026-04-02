import { useState } from 'react'
import { Button } from './components/ui/button'

function App() {

  return (
    <>
      <section id="center" className='text-red-600 font-extrabold'>
        Hello World
        <Button>
          Click me
        </Button>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
