import { StyleSheet, Text } from "react-native"
import colors from "../../consts/colors"

export default function TextName({name}){
  
    return(
      <Text style={styles.nameText}>{name}</Text>
    )
  }

const styles = StyleSheet.create({
    nameText: {
      fontSize: 26,
      color: colors.black,
      fontFamily: 'Inter-ExtraBold',
    },
  })