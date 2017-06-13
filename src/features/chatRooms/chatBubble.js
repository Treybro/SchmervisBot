/**
 * @providesModule ChatBubble
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import theme from 'Theme';
import getAsset from 'Assets';

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
    <View style={(sender === 'schmervisbot') ? [styles.containerView, styles.left] : [styles.containerView, styles.right]}>
      {(sender === 'schmervisbot') ? renderAvatar(true) : () => {}}
      <View style={(sender === 'schmervisbot') ? [styles.chatBubble, {backgroundColor: theme.blue, marginRight: 40}] : [styles.chatBubble, {backgroundColor: theme.darkGrey, marginLeft: 40}]}>
        <Text style={styles.messageContent}>{messageContent}</Text>
        <Text style={styles.metaData}>{(sender === 'schmervisbot') ? 'You' : sender} - {date}</Text>
      </View>
      {(sender === 'schmervisbot') ? () => {} : renderAvatar(false)}
    </View>
  );
};

const renderAvatar = (which) => {
  return <Image source={(which) ? getAsset('meIcon') : getAsset('youIcon')} style={styles.icon} resizeMode={'stretch'}/>;
};

ChatBubble.propTypes = {
  messageContent: React.PropTypes.string.isRequired,
  date: React.PropTypes.string.isRequired,
  sender: React.PropTypes.string.isRequired,
};

const styles = StyleSheet.create({

  containerView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginBottom: 20,
  },
  chatBubble: {
    alignSelf: 'flex-start',
    padding: 15,
    borderRadius: 15,
  },
  left: {
    alignSelf: 'flex-start',
  },
  right: {
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
  icon: {
    margin: 10,
    tintColor: theme.darkGrey,
    width: 20,
    height: 20,
  },
});

export default ChatBubble;