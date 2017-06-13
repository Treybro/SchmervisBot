/**
 * @providesModule TicketCard
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import theme from 'Theme';

/*
* Displays the ticket title for a ticket
*/
const TicketCard = (props) => {
  const { ticketTitle } = props;
  return (
    <View style={styles.containerView}>
      <Text style={styles.ticketText}>{ticketTitle}</Text>
    </View>
  );
};

TicketCard.propTypes = {
  ticketTitle: React.PropTypes.string.isRequired,
};

const styles = StyleSheet.create({

  containerView: {
    backgroundColor: theme.blue,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ticketText: {
    color: theme.white,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default TicketCard;