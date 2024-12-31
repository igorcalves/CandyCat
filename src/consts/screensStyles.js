import { StyleSheet } from 'react-native'
import colors from './colors'

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    alignItems: 'center',
  },
  input: {
    width: 350,
  },
  scroll: {
    width: '100%',
    flex: 1,
    paddingHorizontal: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 80,
    marginBottom: 20,
  },
  activityIndicator: {
    marginTop: 50,
  },

  addSourceStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 20,
  },

  bodyTitleContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
})

export default styles
