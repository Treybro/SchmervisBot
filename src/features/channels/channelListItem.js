/**
 * @providesModule ChannelListItem
 */

import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import theme from 'Theme';
import { getAvailableChannels } from 'ChatRoomActions';

/*
* Responsible for rendering a channel
*/
const ChannelListItem = (props) => {
  const { channelName, navigationProps, dispatch } = props;
  return(
    <TouchableOpacity 
      onPress={() => {
        navigationProps.navigate('ChatRoom', {channelName: channelName});
        dispatch(getAvailableChannels (channelName));
      }}
      style={styles.row}>
      <Text style={styles.channelText}>{channelName}</Text>
    </TouchableOpacity>
  );
};

ChannelListItem.propTypes = {
  channelName: React.PropTypes.string.isRequired,
  navigationProps: React.PropTypes.object.isRequired,
  dispatch: React.PropTypes.func.isRequired,
};

const styles = StyleSheet.create({

  row: {
    flex: 1,
    backgroundColor: theme.blue,
    height: 50,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'center',
  },
  channelText: {
    color: theme.white,
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 20,
  },
});

export default ChannelListItem;