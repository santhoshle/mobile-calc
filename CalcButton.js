import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function CalcButton(props) {

  onPress = () => {
    props.onPress(props.text)
  }

  return (
    <View style={props.style} onTouchEnd={onPress}>
      <Text style={styles.button} >{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#696969',
    alignItems: 'center',
    justifyContent: 'center',
  }
});