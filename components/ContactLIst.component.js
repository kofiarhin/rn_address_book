import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import Data from '../mocks/data';
import Icon from 'react-native-vector-icons/Ionicons';
import {DataContext} from '../context/Data.context';
import {Search} from '../components/Search.component';

export const ContactList = ({navigation}) => {
  const {users, searchData} = useContext(DataContext);

  let tempData = searchData.length > 0 ? searchData : users;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Search />
      </View>

      <FlatList
        contentContainerStyle={{
          padding: 20,
        }}
        keyExtractor={item => item.id}
        data={tempData}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              key={item.id}
              style={styles.row}
              onPress={() => navigation.navigate('Details', {user: item})}>
              <Text style={styles.text}> {item.name} </Text>
              <Icon name="chevron-forward-outline" size={30} />
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 20,
  },
  container: {
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  text: {
    fontSize: 20,
  },
});
