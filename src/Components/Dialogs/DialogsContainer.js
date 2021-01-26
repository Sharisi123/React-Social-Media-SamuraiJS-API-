import { connect } from 'react-redux'
import { sendMassageAC } from '../../Redux/dialogReduser'
import Dialogs from './Dialogs'
import './Dialogs.css'
import { AuthRedirectComponent } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

let mapStateToProps = state => {
    return {
        dialogPage: state.dialogPage,
    }
}

export default compose(
    AuthRedirectComponent,
    connect(mapStateToProps, { sendMassageAC })
)(Dialogs)