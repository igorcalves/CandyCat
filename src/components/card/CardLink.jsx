import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../../consts/colors";
import { View } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function CardLink({
  title,
  navigation,
  screen
}) {

  const navigations = useNavigation();

  return (
    <>
    <TouchableOpacity onPress={() => navigation.navigate(screen)}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 215 * 0.85,
    height: 300 *0.85,
    borderRadius: 50,
    backgroundColor: colors.white,
  },
  title: {
    fontFamily: 'Inter-ExtraBold',
    fontSize: 16,
  }
});