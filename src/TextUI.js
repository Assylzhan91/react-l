import React from 'react'
import PropTypes from 'prop-types';

function TextUI ({text}){

  return <div>
    <h1>Title</h1>
    <p>{text}</p>
  </div>
}

TextUI.propTypes = {
  text: PropTypes.string.isRequired
};


export default TextUI
