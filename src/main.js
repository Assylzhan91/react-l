import React from 'react'
import {render} from 'react-dom'
import {AppFn} from './app-func'

let alphabetic = [
  {
    name: 'A',
    children: [
      {
        name: 'AA',
        children: null
      }
    ]
  },
  {
    name: 'B',
    children: [
      {
        name: 'BB',
        children: [
          {
            name: 'BBB',
            children: null,
          }
        ]
      }
    ]
  },
  {
    name: 'C',
    children: null
  },
]

render(
  <div className="some">
    <h2>Hello, React</h2>
    <hr/>
    <hr/>
    <hr/>
    <div>Text</div>
    <AppFn items={alphabetic}/>
  </div>,
  document.getElementById('app'))
