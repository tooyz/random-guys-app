import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Image, Text, View} from 'react-native';
export class PersonListItem extends Component {
  render = () => {
    const {onPress, person} = this.props;

    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image
          source={{uri: person.picture.medium}}
          resizeMode={'contain'}
          style={styles.avatar}
        />
        <View style={styles.col}>
          <Text style={styles.name}>
            {person.name.first} {person.name.last}
          </Text>
          <Text style={styles.email}>{person.email}</Text>
        </View>
      </TouchableOpacity>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomColor: '#b0b0b0',
    borderBottomWidth: 0.4,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  col: {
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    color: '#2e2e2e',
  },
  email: {
    marginTop: 10,
    fontSize: 13,
    color: '#b0b0b0',
  },
});
