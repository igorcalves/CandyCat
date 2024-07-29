import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../../consts/colors";
import { View } from "react-native";

export default function CardLink({
  title,
  navigation,
  screen,
  iconId,
}) {

  const getIcon = (iconId) => {
    switch (iconId) {
      case 1:
        return (
          <Image
            style={styles.icon}
            source={require('../../../assets/icons/Tasks.png')}
            resizeMode="contain"
          />
        );
      case 2:
        return (
          <Image
            style={styles.icon}
            source={require('../../../assets/icons/Money.png')}
            resizeMode="contain"
          />
        );
      case 3:
        return (
          <Image
            style={styles.icon}
            source={require('../../../assets/icons/Shopping.png')}
            resizeMode="contain"
          />
        );
      default:
        return (
          <Image
            style={styles.icon}
            source={require('../../../assets/icons/Tasks.png')}
          />
        );
      }
    }

  return (
    <>
    <TouchableOpacity onPress={() => navigation.navigate(screen)}>
      <View style={styles.container}>
      {
        getIcon(iconId)
      }
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
  },
  icon: {
    width: 100,
    height: 100,
  },
});