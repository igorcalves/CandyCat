import { StyleSheet, Text, View } from "react-native";
import Login from "./components/Login";
import colors from "./consts/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import Home from "./components/Home";
import Tasks from "./components/Tasks";

export default function Main(){
  return(
    <SafeAreaView style ={styles.container}>
      {/* <Login/> */}
      <Home/>
      {/* <Tasks/> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.background,
  },
});