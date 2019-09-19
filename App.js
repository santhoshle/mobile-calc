import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CalcButton from "./CalcButton"

export default function App() {

  const [display, setDisplay] = useState('0');

  onPress = (value) => {
    let data;
    switch(value) {
      case "=":
        data = eval(display);
        break;
      case "Clear":
        data = '0';
        break;
      case "Backspace":
        data = display.slice(0, -1);
        break;
      default:
        data = display !== '0' ? display + value : value; 
    }
    setDisplay(data === ''? '0' : data);
  }

  return (
    <View style={styles.container}>
    <View style={styles.displayContainer}><Text style={styles.labelText}>{display}</Text></View>
    <View style={styles.buttonContainer}>
      <CalcButton style={styles.singleCell} onPress={this.onPress} text="Clear" />
      <CalcButton style={styles.doubleCell} onPress={this.onPress} text="Backspace" />
      <CalcButton style={styles.singleCell} onPress={this.onPress} text="/" />
    </View>
    <View style={styles.buttonContainer}>
      <CalcButton style={styles.singleCell} onPress={this.onPress} text="7" />
      <CalcButton style={styles.singleCell} onPress={this.onPress} text="8" />
      <CalcButton style={styles.singleCell} onPress={this.onPress} text="9" />
      <CalcButton style={styles.singleCell} onPress={this.onPress} text="*" />
    </View>
    <View style={styles.buttonContainer}>
      <CalcButton style={styles.singleCell} onPress={this.onPress} text="4" />
      <CalcButton style={styles.singleCell} onPress={this.onPress} text="5" />
      <CalcButton style={styles.singleCell} onPress={this.onPress} text="6" />
      <CalcButton style={styles.singleCell} onPress={this.onPress} text="-" />
    </View>
    <View style={styles.buttonContainer}>
      <CalcButton style={styles.singleCell} onPress={this.onPress} text="3" />
      <CalcButton style={styles.singleCell} onPress={this.onPress} text="2" />
      <CalcButton style={styles.singleCell} onPress={this.onPress} text="1" />
      <CalcButton style={styles.singleCell} onPress={this.onPress} text="+" />
    </View>
    <View style={styles.buttonContainer}>
      <CalcButton style={styles.singleCell} onPress={this.onPress} text="0" />
      <CalcButton style={styles.singleCell} onPress={this.onPress} text="." />
      <CalcButton style={styles.doubleCell} onPress={this.onPress} text="=" />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelText: {
    fontSize: 80,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#fff',
    textAlign: 'right',
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  displayContainer: {
    flex: 3,
    width: '100%',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  singleCell: {
    flex: 1,
    height: '100%',
    width: '100%',
    borderColor: '#ff0000',
    borderWidth: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  doubleCell: {
    flex: 2,
    height: '100%',
    width: '100%',
    borderColor: '#ff0000',
    borderWidth: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});