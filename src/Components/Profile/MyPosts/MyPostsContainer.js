import { connect } from 'react-redux'
import { addPostAC } from '../../../Redux/profileReduser'
import MyPosts from './MyPosts'
import './MyPosts.css'

let mapStateToProps = state => {
    return {
        profilePage: state.profilePage
    }
}

let MyPostsContainer = connect(mapStateToProps, { addPostAC })(MyPosts)

export default MyPostsContainer