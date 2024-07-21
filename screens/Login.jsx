import { Image ,StyleSheet, Text, View } from "react-native";
import TextInput from "../components/inputs/TextInput";
import PrimaryButton from "../components/buttons/PrimaryButton";
import colors from "../consts/colors";
import { useNavigation } from '@react-navigation/native'; 


export default function Login(){
  const navigation = useNavigation();
  return(
    <View style={styles.container}>
      <View style={styles.logo}>
      <Image
        style={styles.image}
        source={require('../assets/icons/Home.png')} // Substitua pelo caminho da sua imagem
      />
        <Text style={styles.TextOnTop}>CandyCat</Text>
        

      </View>
      <View>
        <TextInput placeholder = "Login" />
        <TextInput placeholder = "Senha" />
        <PrimaryButton title = "Entrar" onPress = {() => {navigation.navigate('Home')}} />
      </View>
    </ View>
      
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
    width: '100%',
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