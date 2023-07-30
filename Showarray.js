import React from 'react'

function Showarray({fruits}) {
  return (
    <div>
        <ul>

        {

        fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))
        
        }


      </ul>

    </div>
  )
}

export default Showarray