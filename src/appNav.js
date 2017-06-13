/**
 * @providesModule AppNav
 */
import { StackNavigator } from 'react-navigation';
import ChannelScreen from 'ChannelScreen';
import ChatRoomScreen from 'ChatRoomScreen';

const AppNav = StackNavigator({
  Channels: {
    screen: ChannelScreen,
  },
  ChatRoom: {
    screen: ChatRoomScreen,
  },
});

export default AppNav;