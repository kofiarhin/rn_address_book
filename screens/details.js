import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const Details = ({route, navigation}) => {
  const {user} = route.params;

  console.log(user);
  return (
    <View
      style={{
        alignItems: 'center',
        flex: 1,
      }}>
      <View
        style={{
          position: 'absolute',
          top: 50,
          left: 20,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-back-outline" size={40} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          paddingTop: 100,
        }}>
        <Image
          source={{uri: `https://robohash.org/${user.name}`}}
          style={styles.img}
          resizeMode="contain"
        />
        <Text style={styles.text}> {user.name} </Text>
        <Text style={styles.text}> {user.email} </Text>
        <Text style={styles.text}> {user.phone} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },

  text: {
    fontSize: 20,
    marginBottom: 10,
  },
});
