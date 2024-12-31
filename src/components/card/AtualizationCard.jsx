import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../../consts/colors'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { convertDate, getOnlyHour } from '../../utils/date/convert'
import Icon from 'react-native-vector-icons/MaterialIcons'
export default function AtualizationCard({
  title,
  description,
  date,
  onPressed,
  editable = true,
  onPressEdit,
  hasEditButton = true,
  onPressDelete,
  disabled = false,
  iconName,
  wish = false,
  missingValue,
  progressValue = 0,
}) {
  const ProgressBar = ({ progress }) => {
    if (!progress) progress = 0
    if (progress > 100) progress = 100
    return (
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${progress}%` }]}></View>
        {progress === 100 || missingValue === 0 ? (
          <Text style={styles.completeText}>Completo</Text>
        ) : (
          <Text style={styles.completeText}>{`Falta R$: ${Math.abs(
            +missingValue.toFixed(2)
          )}`}</Text>
        )}
      </View>
    )
  }
  const switchIcon = () => {
    switch (iconName) {
      case 'Tasks':
        return require('../../../assets/icons/Tasks.png')
      case 'Check':
        return require('../../../assets/icons/Check.png')
      case 'Money':
        return require('../../../assets/icons/Money.png')
      default:
        return require('../../../assets/icons/Tasks.png')
    }
  }
  const edit = () => (
    <View style={styles.edit}>
      {hasEditButton ? (
        <TouchableOpacity onPress={onPressEdit}>
          <MaterialIcons name="edit" size={24} color={colors.accent} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity disabled={true}>
          <MaterialIcons name="edit" size={24} color={colors.accent} />
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={onPressDelete}>
        <MaterialIcons name="delete" size={24} color={colors.accent} />
      </TouchableOpacity>
    </View>
  )

  const truncateTitle = (title) => {
    if (!title) return ''
    if (title.length > 20) {
      return title.substring(0, 20) + '...'
    }
    return title
  }

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.white,
        },
      ]}
    >
      <View style={styles.iconBackground}>
        <Image source={switchIcon()} style={styles.icon} />
      </View>
      <View style={{ flex: 8, marginLeft: 19 }}>
        <Text style={styles.title}>{truncateTitle(title)}</Text>
        <Text
          style={[styles.subTitle, { fontSize: 13 }]}
        >{`criado as ${getOnlyHour(date)}`}</Text>
        <View>{wish && <ProgressBar progress={progressValue} />}</View>
      </View>
      <View
        style={{
          flex: 3,
          alignItems: 'flex-end',
          marginTop: 10,
        }}
      >
        <Icon
          name="info"
          size={24}
          color={colors.accent}
          onPress={onPressed}
          disabled={disabled}
        />
      </View>
    </View>
  )
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
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'transparent',
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
    color: colors.black,
  },
  edit: {
    flexDirection: 'row',
    gap: 10,
  },
  progressBarContainer: {
    marginTop: 10,
    height: 20,
    width: '90%',
    backgroundColor: colors.accent,
    borderRadius: 10,
  },
  progressBar: {
    height: '100%',
    backgroundColor: 'blue',
    borderRadius: 10,
  },
  completeText: {
    fontFamily: 'Inter-ExtraBold',
    color: 'black',
    position: 'absolute',
    alignSelf: 'center',
  },
})
