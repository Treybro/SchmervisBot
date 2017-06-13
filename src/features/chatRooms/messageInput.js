/**
 * @providesModule MessageInput
 */

import React, { Component } from 'react';
import {
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import theme from 'Theme';
import { sendMessage } from 'ChatRoomActions';

/*
* Handles messages sent from user
*/
class MessageInput extends Component {

  static propTypes = {
    sendMessage: React.PropTypes.func.isRequired,
    sendingMessage: React.PropTypes.bool.isRequired,
  }
  constructor(props){
    super(props);
    this.state = {
      text: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log("dajwbndoawnd");
    if (nextProps.sendingMessage === false) {
      console.log ("In here");
      this.setState({text:''});
    }
  }

  render() {
    return(
      <KeyboardAvoidingView
        behavior={'position'}>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          value={this.state.text}
          placeholder={'Type Message'}
          placeholderTextColor={theme.darkGrey}
          autoCapitalize={'none'}
          autoCorrect={false}
          autoFocus={false}
          editable={true}
          keyboardType={'default'}
          multiline={false}
          onChangeText={(text) => this.setState({text})}
          underlineColorAndroid={'transparent'}
          returnKeyType={'done'}
          enablesReturnKeyAutomatically={true}
          onSubmitEditing={() => this._sendMessage()} />
      </KeyboardAvoidingView>
    );
  }

  _sendMessage () {
    const text = this.state.text;
    this.setState({text:''}, ()=>{
      this.props.sendMessage (text);
    });
  }
}

const styles = StyleSheet.create({

  containerView: {
    flex: 1,
  },
});

const mapStateToProps = state => ({
  sendingMessage: state.chatRoomReducer.sendingMessage,
});

const mapDispatchToProps = dispatch => ({
  sendMessage: (message) => dispatch (sendMessage(message)),
});
export default connect(mapStateToProps, mapDispatchToProps)(MessageInput);