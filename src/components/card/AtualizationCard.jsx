import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import colors from "../../consts/colors";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { convertDate, getOnlyHour } from "../../utils/date/convert";

export default function AtualizationCard({ 
    title,
    completed,
    description,
    date,
    onPressed,
    editable = true,
    onPressEdit,
    onPressDelete,
    toggle,
    disabled = false,
  }) {
  
  const edit = () => (
    <View style={styles.edit}>
      <TouchableOpacity onPress={onPressEdit}>
        <MaterialIcons name="edit" size={24} color={colors.white}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressDelete}>
        <MaterialIcons name="delete" size={24} color={colors.white} />
      </TouchableOpacity>
    </View>
  );

  return (
    <TouchableOpacity
      onPress={onPressed}
      disabled={disabled}
    >
      <View style={[
      styles.container, 
      {
        backgroundColor: toggle? 
        colors.strongBlue: 
        colors.stronbBlueV}]}>
  <View style={{ flex: 1 }}>
    {!completed ? (
      <Image
        style={styles.icon}
        source={require('../../../assets/icons/Tasks.png')}
      />
    ) : (
      <Image
        style={styles.icon}
        source={require('../../../assets/icons/Check.png')}
      />
    )}
  </View>
  <View style={{ flex: 8,  marginLeft:19 }}>
    <Text style={styles.title}>{title}</Text>
    <Text style={[styles.subTitle, {fontSize:13}]}>{`${description} as ${getOnlyHour(date)}`}</Text>
  </View>
  <View style={{ flex: 3 }}>
    <Text style={[styles.subTitle, {fontSize:12}]}>{convertDate(date)}</Text>
    {editable && edit()}
  </View>
</View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
    padding: 15,  
    borderRadius: 15,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap', 
  },
  
  icon: {
    marginRight: 10,
    width: 40,
    height: 40,
    borderRadius: 15,
    backgroundColor: colors.background,
  },
  title: {
    textAlign: 'left',
    fontSize: 16,
    fontFamily: 'Inter-ExtraBold',
    color: 'black',
    flexShrink: 1, 
  },
  subTitle: {
    fontSize: 16,
    fontFamily: 'Inter-ExtraBold',
    color: colors.background,
  },
  edit: {
    flexDirection: 'row',
    gap: 10,
  }
});