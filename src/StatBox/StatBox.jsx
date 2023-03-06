import React from 'react'
import Search from '../Search/Search'
import { formatLabel } from '../Utilities/Helper'
import './StatBox.css'
import PropTypes from 'prop-types'

function StatBox(props) {
    return (
        <div className="stat-box">
            <p>{formatLabel(props.stat.label)}</p>
            <h3>{props.stat.value}</h3>
        </div>
    )
  }
  
export default StatBox

StatBox.propTypes = {
    props: PropTypes.shape({
        stat: PropTypes.shape({
            key: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            value: PropTypes.number.isRequired,
        })
    })
  }