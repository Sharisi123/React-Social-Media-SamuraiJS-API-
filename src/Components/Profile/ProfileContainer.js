import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { getProfileThunkCreator, getStatusTC, updateStatusTC } from '../../Redux/profileReduser'
import { withRouter } from 'react-router-dom'
import { AuthRedirectComponent } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import { getProfileSuperSelector } from '../../Redux/profileSelectors'

class ProfileContainer extends React.Component {
    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorizedUserId
        }
        this.props.getProfileThunkCreator(userId)
        this.props.getStatusTC(userId)
    }

    render() {
        return (
            <Profile
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatusTC} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: getProfileSuperSelector(state),
    status: state.profilePage.status,
    authorizedUserId: state.auth.id
})

export default compose(
    connect(mapStateToProps, { getProfileThunkCreator, getStatusTC, updateStatusTC }),
    withRouter,
    AuthRedirectComponent
)(ProfileContainer)