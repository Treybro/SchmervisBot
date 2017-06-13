/**
 * @providesModule MessageInput
 */

import React, { Component } from 'react';
import {
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';
import theme from 'Theme';

/*
* Handles messages sent from user
*/
class MessageInput extends Component {

  constructor(props){
    super(props);
    this.state = {
      text: '',
    };
  }

  render() {
    return(
      <KeyboardAvoidingView
        behavior={'position'}>
        <TextInput
          keyboardType={'default'}
          autoCapitalize={'none'}
          autoCorrect={false}
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          placeholder={'Type Message'}
          onSubmitEditing={() => {}}
          returnKeyType={'send'}
          underlineColorAndroid={'transparent'}/>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({

  containerView: {
    flex: 1,
  },
});

export default MessageInput;