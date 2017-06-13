/**
 * @providesModule ChatRoomScreen
 */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import theme from 'Theme';
import Loading from 'Loading';
import TicketCard from 'TicketCard';

/*
* Responsible for rendering the chat view
*/
class ChatRoomScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.channelName}`,
    headerStyle: {
      backgroundColor: theme.darkGrey,
    },
    headerTitleStyle: {
      color: theme.white,
    },
    headerBackTitle: null,
    headerTintColor: theme.white,
  });

  static propTypes = {
    fetchingChats: React.PropTypes.bool.isRequired,
    channelName: React.PropTypes.string.isRequired,
  };

  render() {
    //  Are we loading messages?
    if (this.props.fetchingChats)
      return <Loading />;

    return(
      <View style={styles.containerView}>
        <TicketCard ticketTitle={this.props.channelName}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  containerView: {
    flex: 1,
  },
});

const mapStateToProps = state => ({
  fetchingChats: state.chatRoomReducer.fetchingChats,
  chats: state.chatRoomReducer.chats,
  channelName: state.chatRoomReducer.channelName,
});

export default connect(mapStateToProps)(ChatRoomScreen);