import { StyleSheet } from 'react-native'
import colors from '../../consts/colors'

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    backgroundColor: colors.white,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 17,
    fontFamily: 'Inter-ExtraBold',
  },
  buttons: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
})
