/**
 * @providesModule ChatRoomScreen
 */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ListView,
} from 'react-native';
import { connect } from 'react-redux';
import theme from 'Theme';
import Loading from 'Loading';
import TicketCard from 'TicketCard';
import ChatBubble from 'ChatBubble';

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
    fetchingMessages: React.PropTypes.bool.isRequired,
    channelName: React.PropTypes.string.isRequired,
    messages: React.PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      ds: ds,
      dataSource: ds.cloneWithRows([]),
    };
  }

  componentWillReceiveProps(nextProps){
    this.setState ({
      dataSource: this.state.ds.cloneWithRows (nextProps.messages),
    });
  }

  render() {
    //  Are we loading messages?
    if (this.props.fetchingMessages)
      return <Loading />;

    return(
      <View style={styles.containerView}>
        <TicketCard ticketTitle={this.props.channelName}/>
        <ListView
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <ChatBubble 
            messageContent={rowData.messageContent}
            date={rowData.date}
            sender={rowData.sender}/>}/>
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
  fetchingMessages: state.chatRoomReducer.fetchingMessages,
  messages: state.chatRoomReducer.messages,
  channelName: state.chatRoomReducer.channelName,
});

export default connect(mapStateToProps)(ChatRoomScreen);