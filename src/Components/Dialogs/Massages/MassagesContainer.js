import React from 'react'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import Massages from './Massages'

class MassagesContainer extends React.Component {

    render() {
        console.log(this.props)

        if(this.props.location.pathname === '/dialogs/1') {
            return (<div className='massages-container'>2</div>)
        }
        if(this.props.location.pathname === '/dialogs/2') {
            return (<div className='massages-container'>2</div>)
        }
        if(this.props.location.pathname === '/dialogs/3') {
            return (<div className='massages-container'> {this.props.massagesArr.map(item => <Massages text={item.text} key={item.id} />)}</div>)
        }

        return (
            <div className='massages-container'> 
               
            </div>
        )
    }
}

export default compose(
    withRouter
)(MassagesContainer)