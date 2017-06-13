/**
 * @providesModule Loading
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { theme } from 'Theme';

//  Displays loading text
const Loading = () => {
  return (
    <View style={styles.containerView}>
      <Text style={styles.loadingText}>Loading....</Text>
    </View>
  );
};

const styles = StyleSheet.create({

  containerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    color: theme.darkGrey,
  },
});

export default Loading;