import React, {Component} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

export class PersonInfoScreen extends Component {
  renderRow = (cells) => {
    return cells.map((cell) => (
      <View style={styles.cell} key={cell.title}>
        <Text style={styles.cellTitle}>{cell.title}</Text>
        <Text style={styles.cellValue}>{cell.value}</Text>
      </View>
    ));
  };

  render = () => {
    const {person} = this.props.route.params;

    return (
      <View style={styles.container}>
        <Image
          source={{uri: person.picture.large}}
          style={styles.avatar}
          resizeMode={'contain'}
        />
        {this.renderRow([
          {title: 'login', value: person.login.username},
          {title: 'name', value: person.name.first},
          {title: 'surname', value: person.name.last},
          {title: 'email', value: person.email},
          {title: 'phone', value: person.cell},
        ])}
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 20,
  },
  cell: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellTitle: {
    fontSize: 13,
    color: '#b0b0b0',
  },
  cellValue: {
    marginTop: 10,
    fontSize: 16,
    color: '#2e2e2e',
  },
});
