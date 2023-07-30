import React from 'react'
import "../styles/home.css"
function Home({abcd,ttt}) {

  return (
    <div>
      <h1 className='header'>
        {abcd}  {ttt}
      </h1>

      <div>
        <img src="https://picsum.photos/200/300" alt="random" />
        <p>
          lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Quisquam, voluptatum.<br></br>
          lorem ipsum dolor sit amet consectetur adipisicing elit.  
          Quisquam, voluptatum.
        </p>
      </div>

    </div>
  )
}

export default Home