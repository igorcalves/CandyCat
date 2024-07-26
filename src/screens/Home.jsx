import { StyleSheet, Text, View } from "react-native"
import Header from "../components/pageComponents/Header"
import Body from "../components/pageComponents/Body"
import MoneyText from "../components/pageComponents/home/MoneyText"
import { BodyHome } from "../components/pageComponents/home/BodyHome"
import colors from "../consts/colors"

export default function Home({
  navigation,
}){
  return(
    <>
      <View style={styles.container}>
        <Header>
          <MoneyText amount={20000.99} />
        </Header>
        <Body>
          <BodyHome navigation={navigation}/>
        </Body>
      </View>
    </>
      
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,backgroundColor: colors.background,
    width: '100%',

  },
 
})