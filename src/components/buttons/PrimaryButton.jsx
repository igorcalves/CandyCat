import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../../consts/colors";

export default function PrimaryButton({
  title, 
  onPress, 
  primaryButtonStyle,
  loading
}){
  
    return(
      <TouchableOpacity style={[styles.button, primaryButtonStyle]} onPress={onPress}>
        {loading ? <ActivityIndicator color={colors.strongBlue} /> :  <Text style={styles.title}>{title}</Text>}
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
    title: {
      color: colors.black,
      fontFamily: 'Inter-ExtraBold',
      fontSize: 16,
    }
  });