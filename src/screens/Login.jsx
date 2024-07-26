import { Image ,StyleSheet, Text, View } from "react-native";
import TextInput from "../components/inputs/TextInput";
import PrimaryButton from "../components/buttons/PrimaryButton";
import colors from "../consts/colors";
import { useNavigation } from '@react-navigation/native';
import app from '../data/services/firebaseApp'
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signout } from "firebase/auth";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loginRequest } from "../store/user/actions";

export const Login = ({
  login,

}) => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');






  const handleLogin = () => {
    login({ email:"teste@gmail.com", password: "123@@@456" }, () => {
      navigation.navigate('Home');
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          style={styles.image}
          source={require('../../assets/icons/Home.png')}
        />
        <Text style={styles.TextOnTop}>CandyCat</Text>
      </View>
      <View style={styles.container}>
        <TextInput 
          placeholder="Login" 
          value={email}
          onChangeText={setEmail}
        />
        <TextInput 
          placeholder="Senha"
          secureTextEntry={true} 
          value={password}
          onChangeText={setPassword}
        />
        <PrimaryButton title="Entrar" onPress={handleLogin} />
      </View>
    </View>
  );
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


const mapDispatchToProps = (dispatch) => ({
  login: (data, callback) => dispatch(loginRequest(data, callback)),
});

export default connect(null, mapDispatchToProps)(Login);  
