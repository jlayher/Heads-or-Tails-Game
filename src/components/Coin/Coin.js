import React from 'react'
import "./coin.css"


const Coin = () => {
  return (
    <div className='coin_container'>
      <div className='coin_container-current'>
      <div>Current Player: X</div>
      <div>Current Bet: X</div>
    </div>
 

      <div className='coin'>
        <img src="/heads_test.jpg" />
      </div>

      <div>
        Input Bet!
      </div>
      
      <div>
        <button>Flip!</button>
      </div>
    </div>


  )
}

export default Coin
