/**
 * @providesModule WelcomeScreen
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { enterApp } from 'WelcomeActions';
import { theme } from 'Theme';

/*
* Displays a simple welcome message to the user
*/
const WelcomeScreen = (props) => {
  const { enterApp } = props;
  return(
    <View style={styles.containerView}>
      <Text style={styles.welcomeText}>SchmervisBot, a ServisBot Clone</Text>
      <TouchableOpacity
        onPress={() => enterApp()}
        style={styles.enterButton}>
        <Text style={styles.enterButtonText}>Enter</Text>
      </TouchableOpacity>
    </View>
  );
};

WelcomeScreen.propTypes = {
  enterApp: React.PropTypes.func.isRequired,
};

const styles = StyleSheet.create({

  containerView: {
    flex: 1,
    backgroundColor: theme.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    textAlign: 'center',
    color: theme.white,
    fontSize: 32,
    fontWeight: 'bold',
  },
  enterButton: {
    marginTop: 20,
    height: 50,
    width: 150,
    backgroundColor: theme.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  enterButtonText: {
    color: theme.darkGrey,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

const mapDispatchToProps = dispatch => ({
  enterApp: () => dispatch (enterApp()),
});

export default connect(null, mapDispatchToProps)(WelcomeScreen);