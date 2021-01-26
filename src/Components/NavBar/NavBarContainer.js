import { connect } from 'react-redux'
import NavBar from './NavBar'

let mapStateToProps = state => {
    return {
        friends: state.dialogPage.dialogsArr
    }
}

let NavBarContainer = connect(mapStateToProps)(NavBar)

export default NavBarContainer