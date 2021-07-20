import React, {useContext} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {DataContext} from '../context/Data.context';

export const Search = () => {
  const {users, searchData, setSearchData} = useContext(DataContext);

  const searchUser = search => {
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase()),
    );

    if (filtered) {
      setSearchData(filtered);
    } else {
      setSearchData([]);
    }
  };
  return (
    <View>
      <TextInput
        style={styles.inputText}
        placeholder="Search User"
        onChangeText={text => searchUser(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputText: {
    borderWidth: 1,
    borderColor: 'black',
    height: 50,
    paddingLeft: 20,
    fontSize: 20,
  },
});
