import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../../consts/colors";
import { TouchableOpacity } from "react-native";

export default function Header({children}){
  
  return(
    <>
      <View style={styles.row} >
      {children}
      <TouchableOpacity onPress={() => console.log('CardLink clicked')}>
        <Image source={require('../../assets/images/pepeta.png')} style={styles.profile} />
      </TouchableOpacity>

      </View>
    </>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Adicione esta linha
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
    fontSize: 16,
    fontFamily: 'Inter-ExtraBold',
    color: 'black',
    textAlign: 'center',
  }
})