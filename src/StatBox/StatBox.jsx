import React from 'react'
import Search from '../Search/Search'
import { formatLabel } from '../Utilities/Helper'
import './StatBox.css'

function StatBox(props) {
    console.log(props.stat)
    return (
        <div className="stat-box">
            <p>{formatLabel(props.stat.label)}</p>
            <h3>{props.stat.value}</h3>
        </div>
    )
  }
  
  export default StatBox