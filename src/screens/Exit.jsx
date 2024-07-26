import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import TemplatePage from "./TeamplatePage";
import Header from "../components/pageComponents/Header";
import Body from "../components/pageComponents/Body";
import PrimaryButton from "../components/buttons/PrimaryButton";
import colors from "../consts/colors";
import { logout } from "../store/user/actions";
import { connect } from "react-redux";
export const Exit = ({logout}) =>{
    const navigation = useNavigation();

    const handleLogout = () => {
        logout(() => {
            navigation.navigate('Login');
        });
    }

    return(
        <View style={{flex:1}} >
            
            <TemplatePage>
                <View style={{alignItems:'center'}}>
                    <Header/>
                    
                </View>
                <Body>
                    <View style={{flex:1, alignItems:'center'}}>
                        <PrimaryButton 
                        primaryButtonStyle ={styles.exitButton}
                        onPress={() => navigation.navigate('Login')} title='Perfil'/>
                        <PrimaryButton 
                        primaryButtonStyle ={styles.exitButton}
                        onPress={() => navigation.navigate('Login')} title='Alterar Senha'/>
                        <PrimaryButton 
                        primaryButtonStyle ={styles.exitButton}
                        onPress={handleLogout} title='Sair'/>
                    </View>
                </Body>
            </TemplatePage>

        </View>
    )
    }


    const styles = StyleSheet.create({
        exitButton: {
          backgroundColor: colors.white,
          padding: 10,
          borderRadius: 20,
          width: 350,
          alignItems: 'center',
          marginTop: 20,
        },
        text: {
          color: colors.black,
          fontFamily: 'Inter-ExtraBold',
          fontSize: 16,
        }
      });


const mapDispatchToProps = (dispatch) => ({
    logout: (callback) => dispatch(logout(callback))
    });

export default connect(null, mapDispatchToProps)(Exit);