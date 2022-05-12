import React, { useState } from 'react'

export default function ({min, max}){
    let [ current, setCurrent ] = useState(min);

    let applyCurrent = num => {
        if( num >= min && num <= max){
            setCurrent(num)
        }
    }

    let inc = ()=> applyCurrent(current + 1)
    let dec = ()=> applyCurrent(current - 1)
    function changeHandler(val) {
        let num = parseInt(val)
        if(num > max){
            num = max
        }else {
            num = min
        }
        setCurrent(num)
    }

    return <div>
        <button type='button' onClick={inc}>+</button>
        <input
          type="text"
          value={current}
          onChange={e => changeHandler(e.target.value)}
          onBlur={e => changeHandler(e.target.value)}/>
        <button type='button' onClick={dec}>-</button>
        <p>current{current}</p>
    </div>
}
