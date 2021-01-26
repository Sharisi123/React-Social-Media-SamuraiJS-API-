import React from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import './Header.css'
import { logout } from '../../Redux/authReduser'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

class HeaderContainer extends React.Component {

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default compose(
    withRouter,
    connect(mapStateToProps, { logout }))(HeaderContainer)