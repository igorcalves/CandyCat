import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, TextInput } from 'react-native';
import colors from '../../consts/colors';

export default function TextInputWithButton({ placeholder, value, onChangeText, inputStyle, onPress }) {
  return (
    <View style={[styles.inputContainer, inputStyle]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={colors.gray}
      />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Ok</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    height: 47,
    margin: 8,
    borderWidth: 1,
    borderColor: 'transparent',
    padding: 10,
    width: 300,
    borderRadius: 20,
    backgroundColor: colors.white,
    paddingLeft: 20,
    position: 'relative',
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    color: colors.black, 
    fontFamily: 'Inter-ExtraBold', 
    borderBottomWidth: 0, 
    
  },
  button: {
    padding: 10,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    position: 'absolute',
    right: 10,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.black,
    fontFamily: 'Inter-ExtraBold',
  },
});
