import React, {lazy, Suspense} from 'react'
import {render} from 'react-dom'

const CounterClass = lazy(()=> import('./counter'))
const TextUI = lazy(()=> import('./TextUI'))

render(app(),document.getElementById('app'))

function app(){
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <div className="some">
        <h2>Hello, React</h2>
        <CounterClass min={2} max={10}/>
        <hr/>
        <hr/>
        <div>Text</div>
        <TextUI text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, quod?'/>
      </div>
    </Suspense>
  )
}
