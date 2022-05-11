import React, { useState } from 'react'
import PropTypes from 'prop-types';

function CounterClass ({name, max}){
    let [ current, setCurrent ] = useState(1)
    function inc(){
        if(max > current){
            setCurrent(current + 1)
        }
    }
    return <div>
        <span>{current} {name}</span>
        <button type='button' onClick={ inc }>+</button>
    </div>
}

CounterClass.propTypes = {
    name: PropTypes.string.isRequired,
    max: PropTypes.number.isRequired,
};

CounterClass.default = {
    name: 'Default name',
    max: 10,
};


export default CounterClass
