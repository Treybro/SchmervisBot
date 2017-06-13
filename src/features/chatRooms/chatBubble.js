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

  /* 
  * Going to determine which chat to render here 
  * (usually I'd have an id for the logged in user etc, 
  * but putting here for the moment for time constraints)
  */
  return(
    <View style={(sender === 'schmervisbot') ? [styles.chatBubble, styles.left] : [styles.chatBubble, styles.right]}>
      <Text style={styles.messageContent}>{messageContent}</Text>
      <Text style={styles.metaData}>{(sender === 'schmervisbot') ? 'You' : sender} - {date}</Text>
    </View>
  );
};

ChatBubble.propTypes = {
  messageContent: React.PropTypes.string.isRequired,
  date: React.PropTypes.string.isRequired,
  sender: React.PropTypes.string.isRequired,
};

const styles = StyleSheet.create({

  chatBubble: {
    alignSelf: 'flex-start',
    margin: 10,
    marginBottom: 20,
    borderRadius: 5,
    padding: 15,
  },
  left: {
    backgroundColor: theme.blue,
    alignSelf: 'flex-start',
  },
  right: {
    backgroundColor: theme.darkGrey,
    alignSelf: 'flex-end',
  },
  messageContent: {
    fontSize: 14,
    color: theme.white,
  },
  metaData: {
    fontSize: 12,
    color: theme.white,
    alignSelf: 'flex-end',
  },
});

export default ChatBubble;