import styles from '../../consts/screensStyles'
import colors from '../../consts/colors'
import { ActivityIndicator } from 'react-native'

export const SpinnerLoading = () => (
  <ActivityIndicator
    color={colors.strongBlue}
    style={styles.activityIndicator}
    size={70}
  />
)
