import { StyleSheet, Text, View } from "react-native"
import Header from "./pageComponents/Header"
import Body from "./pageComponents/Body"
import MoneyText from "./pageComponents/home/MoneyText"
import { BodyHome } from "./pageComponents/home/BodyHome"
import Tasks from "./Tasks"
import TextName from "./pageComponents/TextName"

export default function Home(){
  return(
    <>
      <View style={styles.container}>
        <Header>
          <MoneyText amount={20000.99} />
          {/* <TextName name="Tarefas"/> */}
          {/* <TextName name="Dinheiro"/> */}
          {/* <TextName name="Compras"/> */}

        </Header>
        <Body>
          <BodyHome/>
          {/* <Tasks/> */}
        </Body>

      </View>
    </>
      
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
 
})