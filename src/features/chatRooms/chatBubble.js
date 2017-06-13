/**
 * @providesModule ChatBubble
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import theme from 'Theme';

/*
* Responsible for rendering a chat message
*/
const ChatBubble = (props) => {
  const { messageContent, date, sender } = props;
  return(
    <View style={styles.leftBubble}>
      <Text style={styles.messageContent}>{messageContent}</Text>
      <Text style={styles.messageContent}>{date}</Text>
      <Text style={styles.messageContent}>{sender}</Text>
    </View>
  );
};

ChatBubble.propTypes = {
  messageContent: React.PropTypes.string.isRequired,
  date: React.PropTypes.string.isRequired,
  sender: React.PropTypes.string.isRequired,
};

const styles = StyleSheet.create({

  leftBubble: {
    alignSelf: 'flex-start',
    margin: 10,
    marginLeft: 10,
    height: 50,
    width: 200,
    borderRadius: 5,
    backgroundColor: theme.blue,
  },
  rightBubble: {
    alignSelf: 'flex-end',
    margin: 10,
    marginRight: 10,
    height: 50,
    width: 200,
    borderRadius: 5,
    backgroundColor: theme.blue,
  },
  messageContent: {
    fontSize: 14,
    backgroundColor: theme.blue,
  },
});

export default ChatBubble;