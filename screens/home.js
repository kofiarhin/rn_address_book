import React from 'react';
import {View, Text} from 'react-native';
import {ContactList} from '../components/ContactLIst.component';

export const Home = props => {
  return (
    <View>
      <ContactList {...props} />
    </View>
  );
};
