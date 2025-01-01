import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Body from '../components/pageComponents/Body'
import TemplatePage from './TeamplatePage'
import Header from '../components/pageComponents/Header'
import MoneyText from '../components/MoneyText'
import DateFilter from '../components/filter/DateFilter'
import { ScrollView } from 'react-native-gesture-handler'
import AtualizationCard from '../components/card/AtualizationCard'
import stylesC from '../consts/screensStyles'
import TextName from '../components/pageComponents/TextName'
export default function Home() {
  return (
    <TemplatePage>
      <Header>
        <MoneyText amount={20000.99} />
      </Header>
      <Body>
        <View style={stylesC.bodyTitleContainer}>
          <TextName name="Atualizações" />
        </View>
        <DateFilter />
        <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
          {Array.from({ length: 10 }).map((_, index) => (
            <AtualizationCard key={index} />
          ))}
        </ScrollView>
      </Body>
    </TemplatePage>
  )
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    padding: 20,
    marginTop: 3,
  },
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  cardContainer: {
    padding: 20,
    flexDirection: 'row',
    marginTop: 20,
  },
  title: {
    textAlign: 'left',
    fontSize: 16,
    marginLeft: 20,
    fontFamily: 'Inter-ExtraBold',
    color: 'black',
  },
})
