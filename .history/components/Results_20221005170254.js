import React from 'react'
import Thumbbnail from './Thumbbnail'

function Results() {
  return (
    <div>
    {requests.map(result =>(  
    <Thumbbnail key={result.id} result={result/>
      ))}
    </div>
  )
}

export default Results