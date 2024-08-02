import { Image ,StyleSheet, Text, View } from "react-native";
import TextInput from "../../components/inputs/TextInput";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import colors from "../../consts/colors";
import { initializeApp } from "firebase/app";
import { useNavigation } from '@react-navigation/native';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signout } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseConfig  from "../../data/fireabaseBaseConfig";

const app = initializeApp(firebaseConfig);
export default function Login() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
        navigation.navigate('Home'); 
      }
    });

    return () => unsubscribe();
  }, [auth]);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('Usuário logado:', userCredential.user);
      })
      .catch((error) => {
        console.error('Erro no login:', error.code, error.message);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          style={styles.image}
          source={require('../assets/icons/Home.png')}
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
