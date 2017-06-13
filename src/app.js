/**
 * @providesModule App
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppNav from 'AppNav';
import WelcomeScreen from 'WelcomeScreen';

/*
* Usually I use this as the main navigation component.
* eg. I'd determine if the user should be displayed a loadingscreen, welcome screen, tutorial screen etc...
* This example will have a very basic welcome message
*/
class App extends Component {

  static propTypes = {
    hasBeenWelcomed: React.PropTypes.bool.isRequired,
  }

  render() {
    //  Has user pressed the enter button?
    if(this.props.hasBeenWelcomed)
      return <AppNav />;
    return <WelcomeScreen />;
  }
}

const mapStateToProps = state => ({
  hasBeenWelcomed: state.welcomeReducer.hasBeenWelcomed,
});

export default connect(mapStateToProps)(App);