import { getUsersThunkCreator, setCurrentPage, followingTC } from "../../Redux/usersRedures"
import { connect } from 'react-redux'
import UsersC from "./UsersC"
import { AuthRedirectComponent } from "../../hoc/withAuthRedirect"
import { compose } from "redux"

let mapStateToProps = state => {
  return {
    usersPage: state.usersPage
  }
}

export default compose(
  AuthRedirectComponent,
  connect(mapStateToProps, {
    getUsersThunkCreator,
    setCurrentPage,
    followingTC
  })
)(UsersC);
