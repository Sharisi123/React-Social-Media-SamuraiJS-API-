import React from 'react'
import './Massages.css'

const Massages = props => {

    return (
        <div className='massage-item'>{props.text}</div>
    )
}

export default Massages