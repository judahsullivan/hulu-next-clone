import React from 'react'
import Thumbbnail from './Thumbbnail'

function Results() {
  return (
    <div>
    {requests.map(result => 
      (  <Thumbbnail/>)
    )}
    </div>
  )
}

export default Results