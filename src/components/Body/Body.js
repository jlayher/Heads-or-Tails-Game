import React from 'react'
import "./body.css"
import Coin from '../Coin/Coin'
import ScoreChart from '../ScoreChart/ScoreChart'
import FlipLog from '../FlipLog/FlipLog'

const Body = () => {
  return (
    <div className="body_container">
        <ScoreChart />
        <Coin />
        <FlipLog />
    </div>
  )
}

export default Body
