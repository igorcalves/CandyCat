import { StyleSheet, Text, View } from "react-native"
import colors from "../../../consts/colors"

export default function MoneyText({ amount }) {

  const arrayValues = amount.toString().split('.')
  return(
    <View style={styles.column}>
          <Text style={[styles.data, {textAlign: 'left'}]}>Dinheiro Guardado</Text>
          <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
            <Text style={[styles.data]}>R$: </Text>
            <Text style={[styles.data, { fontSize: 32}]}>{arrayValues[0]},</Text>
            <Text style={[styles.data, { fontSize: 16}]}>{arrayValues[1]}</Text>
    </View>
    <Text style={[styles.data, {fontSize: 12, textAlign: 'left', color: colors.gray}]}>Ultima Atualização: dd/mm/yyyy</Text>
        </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
    padding: 20,
    paddingBottom: 60,
  },
  column: {
    flexDirection: 'column',
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: colors.white,
  
  },
  data: {
    textAlign: 'left',
    fontSize: 19,
    fontFamily: 'Inter-ExtraBold',
    color: 'black',
    textAlign: 'center',
  }
})