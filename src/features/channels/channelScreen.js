/**
 * @providesModule ChannelScreen
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import theme from 'Theme';
import { getAvailableChannels } from 'ChannelActions';
import Loading from 'Loading';

import ChannelListItem from 'ChannelListItem';

/*
* Responsible for rendering different channels
*/
class ChannelScreen extends Component {

  static navigationOptions = {
    headerTitle: 'SchmervisBot',
    headerStyle: {
      backgroundColor: theme.darkGrey,
    },
    headerTitleStyle: {
      color: theme.white,
    },
    headerBackTitle: null,
    headerTintColor: theme.white,
  };

  static propTypes = {
    getAvailableChannels: React.PropTypes.func.isRequired,
    availableChannels: React.PropTypes.array.isRequired,
    fetchingAvailableChannels: React.PropTypes.bool.isRequired,
    navigation: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      ds: ds,
      dataSource: ds.cloneWithRows(this.props.availableChannels),
    };
  }

  componentDidMount() {
    this.props.getAvailableChannels();
  }

  componentWillReceiveProps(nextProps){
    this.setState ({
      dataSource: this.state.ds.cloneWithRows (nextProps.availableChannels),
    });
  }

  render() {

    //  Are we loading?
    if (this.props.fetchingAvailableChannels === true)
      return <Loading />;

    return(
      <ListView
        enableEmptySections={true}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => {

          return (
            <ChannelListItem 
              channelName={rowData} 
              navigationProps={this.props.navigation}
              dispatch={this.props.dispatch}/>
          );
        }}/>
    );
  }
}

const mapStateToProps = state => ({
  fetchingAvailableChannels: state.channelReducer.fetchingAvailableChannels,
  availableChannels: state.channelReducer.availableChannels,
});

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch,
  getAvailableChannels: () => dispatch (getAvailableChannels()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelScreen);