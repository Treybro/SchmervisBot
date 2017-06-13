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
* This would ideally be an image view, just a normal view with text for the moment - will refactor later if I have time
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
    height: 120,
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