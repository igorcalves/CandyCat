import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';
import colors from '../consts/colors';
import TextInputWithButton from './inputs/TextInputWithButton';
import AtualizationCard from './card/AtualizationCard';
export default function Tasks() {
  return (
    <View style={styles.container}>
      <TextInputWithButton 
        placeholder="Adicionar Tarefa" 
        inputStyle={[styles.input, { marginBottom: 30 }]} 
      />

      <View style={styles.scroll}>
        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
          {Array.from({length: 10}).map((_, index) => (
            <AtualizationCard key={index} editable={true} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop: 30,
    flex: 1,
    alignItems: 'center',
  },
  input: {
    width: 350,
  },
  scroll: {
    width: '100%',
    flex: 1,
    paddingHorizontal: 10,
  }
  // ...
})