import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../../consts/colors";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export default function AtualizationCard({ editable = false}) {
  
  const edit = () =>{
    return(
      <View style={styles.edit}>
        <TouchableOpacity onPress={() => console.log('Edit clicked')}>
        <MaterialIcons name="edit" size={24} color={colors.strongBlue}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Delete clicked')}>
        <MaterialIcons name="delete" size={24} color={colors.strongBlue} />
      </TouchableOpacity>
      </View>
      
    )
  }

  return (
    <>
        <View style={styles.container}>
          <View style={styles.row}>
            <Image source={require('../../assets/icons/Tasks.png')} style={styles.icon} />

            <View style={[styles.row, {justifyContent: 'space-between', flex: 1}]}>
            <TouchableOpacity onPress={() => console.log('AtulizationCard clicked')}>
              <View>
                <Text style={styles.title}>Titulo</Text>
                <Text style= {styles.subTitle}>Descrição</Text>
              </View>
            </TouchableOpacity>
              <View>
                {editable? edit(): <Text style= {styles.subTitle}>Data</Text>}
              </View>
            </View>
          </View>
        </View>

    </>
    )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  container: {
    marginBottom: 20,
  },
  icon: {
    marginRight: 4,
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: colors.white,
  },
  title: {
    textAlign: 'left',
    fontSize: 16,
    fontFamily: 'Inter-ExtraBold',
    color: 'black',
  },
  subTitle: {
    textAlign: 'left',
    fontSize: 16,
    fontFamily: 'Inter-ExtraBold',
    color: colors.background,
  },
  edit: {
    flexDirection: 'row',
    gap: 10
  }
});