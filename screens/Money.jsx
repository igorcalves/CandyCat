import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';
import TextInputWithButton from '../components/inputs/TextInputWithButton';
import AtualizationCard from '../components/card/AtualizationCard'
import TemplatePage from './TeamplatePage';
import Header from '../components/pageComponents/Header';
import TextName from '../components/pageComponents/TextName';
import Body from '../components/pageComponents/Body';
export default function Money() {
  return (
    <TemplatePage>
      <Header>
        <TextName name="Dinheiro" />
      </Header>
    <Body>
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
    </Body>
    </TemplatePage>

  );
}

const styles = StyleSheet.create({
  container:{
    marginTop: 20,
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
})