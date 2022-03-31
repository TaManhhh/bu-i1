import React from 'react'
import './den.css';


function Den(props) {
  return (
    <div className={`light ${props.className} ${props.on ===true?`light-on`:`light-off`}`}></div>
  )
}

export default Den;