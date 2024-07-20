import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../../consts/colors";

export default function PrimaryButton({text, onPress}){
  
    return(
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    )
  }

  const styles = StyleSheet.create({
    button: {
      backgroundColor: colors.softBlue,
      padding: 10,
      borderRadius: 20,
      width: 300,
      alignItems: 'center',
      marginTop: 20,
    },
    text: {
      color: colors.black,
      fontFamily: 'Inter-ExtraBold',
      fontSize: 16,
    }
  });