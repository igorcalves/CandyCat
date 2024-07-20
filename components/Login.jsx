import { Image ,StyleSheet, Text, View } from "react-native";
import TextInput from "./inputs/TextInput";
import PrimaryButton from "./buttons/PrimaryButton";
import colors from "../consts/colors";


export default function Login(){
  return(
    <>
      <View style={styles.logo}>
      <Image
        style={styles.image}
        source={require('../assets/icons/Home.png')} // Substitua pelo caminho da sua imagem
      />
        <Text style={styles.TextOnTop}>CandyCat</Text>
        

      </View>
      <View style={styles.container}>
        <TextInput placeholder = "Login" />
        <TextInput placeholder = "Senha" />
        <PrimaryButton text = "Entrar" onPress = {() => console.log('Entrou')} />
      </View>
    </>
      
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextOnTop:{
    fontSize: 24,
    marginTop: 30,
    fontFamily: 'Inter-ExtraBold',
    color: colors.white,
    textAlign: 'center',

  },
  logo: {
    paddingTop: 50,
    flexDirection: 'row',
  },
  image: {
    width: 50,
    height: 50,
    alignSelf: 'flex-end',
  }
})