import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Header from '../components/layout/Header';
import { logout } from '../actions/session';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { dropdownIsVisible: false };
  }

  handleBtnClick(e) {
    e.stopPropagation();
    this.setState({ dropdownIsVisible: !this.state.dropdownIsVisible });
  }

  handleLogout() {
    this.props.dispatch(logout());
  }

  render() {
    const { children, session } = this.props;

    return (
      <div className="container" onClick={() => { this.setState({ dropdownIsVisible: false }); }}>
        <Header
          session={session}
          dropdownIsVisible={this.state.dropdownIsVisible}
          handleBtnClick={::this.handleBtnClick}
          handleLogout={::this.handleLogout}
        />
        {children}
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
  session: PropTypes.object.isRequired
};

function select({ session }) {
  return { session };
}

export default connect(select)(App);
