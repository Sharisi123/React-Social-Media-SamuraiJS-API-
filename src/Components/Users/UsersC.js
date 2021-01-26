import React from 'react'
import Loader from '../common/Loader/Loader';
import Users from './Users/Users';

class UsersC extends React.Component {

  componentDidMount() {
    this.props.getUsersThunkCreator(this.props.usersPage.currentPage, this.props.usersPage.pageSize)
  }
  onPageChange({ selected }) {
    selected++
    this.props.getUsersThunkCreator(selected, this.props.usersPage.pageSize)
  }

  render() {
    let pagesCount = Math.ceil(this.props.usersPage.totalUsersCount / this.props.usersPage.pageSize)
    return (
      <>
        {
          this.props.usersPage.isFetching
            ? <Loader />
            : <Users
              usersPage={this.props.usersPage}
              pageCount={pagesCount}
              onPageChange={this.onPageChange.bind(this)}
              isDisable={this.props.usersPage.isDisable}
              followingTC={this.props.followingTC}
              isAuth={this.props.isAuth}
            />
        }
      </>
    )
  }
}

export default UsersC