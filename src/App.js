import './App.css';
import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import NavBarContainer from './Components/NavBar/NavBarContainer';
import UsersContainer from './Components/Users/UsersContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';
import { connect } from 'react-redux';
import {appInitialization} from './Redux/appReduser'
import Loader from './Components/common/Loader/Loader';
import Music from './Components/Music/Music';

class App extends React.Component {

  componentDidMount() {
    this.props.appInitialization()
  }

  render() {

    if(!this.props.initialization) {
      return <Loader />
    }

    return (
      <Router>
        <div className="app-wrapper">
          <HeaderContainer />
          <NavBarContainer />
          <div className="app-wrapper-content">
            <Route path="/profile/:userId?" render={() =>
              <ProfileContainer />}
            />
            <Route path="/dialogs" render={() =>
              <DialogsContainer />}
            />
            <Route path="/users" render={() =>
              <UsersContainer />}
            />
            <Route path="/login" render={() =>
              <Login />}
            />
            <Route path="/music" render={() =>
              <Music />}
            />
          </div>
        </div>
      </Router>
    );
  }
}

let mapStateToProps = state => ({
  initialization: state.app.initialization
})

export default  connect(mapStateToProps, { appInitialization })(App);
