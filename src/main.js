import React from 'react'
import {render} from 'react-dom'
import CounterClass from './CounterClass'


render(
  <div className="some">
    <h2>Hello, React</h2>
    <CounterClass name='Mike' max={4}/>
    <hr/>
    <hr/>
    <CounterClass name='John' max={6}/>
    <hr/>
    <div>Text</div>
  </div>,
  document.getElementById('app'))
