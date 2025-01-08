import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../../consts/colors'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { getOnlyHour } from '../../utils/date/convert'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Svg, { Circle, Text as SvgText } from 'react-native-svg'

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
  const CircularProgress = ({ progress, missingValue }) => {
    const radius = 50
    const strokeWidth = 12
    const circumference = 2 * Math.PI * radius

    const clampedProgress = Math.max(0, Math.min(progress, 100))
    const progressOffset =
      circumference - (clampedProgress / 100) * circumference
    const remainingValue = Math.abs(missingValue.toFixed(2))

    return (
      <View
        style={[styles.circularProgressContainer, { position: 'absolute' }]}
      >
        <Svg height="70" width="70" viewBox="0 0 120 120">
          <Circle
            cx={60}
            cy={60}
            r={radius}
            stroke={colors.lightGray}
            strokeWidth={strokeWidth}
            fill="none"
          />
          <Circle
            cx={60}
            cy={60}
            r={radius}
            stroke={clampedProgress === 100 ? colors.accent : colors.strongGray}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={progressOffset}
            strokeLinecap="round"
          />
          <SvgText
            x={60}
            y={65}
            textAnchor="middle"
            fontSize={18}
            fontWeight="bold"
            fill={colors.black}
          >
            {clampedProgress === 100 ? '100%' : `R$: ${remainingValue}`}
          </SvgText>
        </Svg>
      </View>
    )
  }

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
        return <Icon name="list" size={30} color={colors.accent} />
      case 'Check':
        return <Icon name="check" size={30} color={colors.accent} />
      case 'Money':
        return <Icon name="attach-money" size={30} color={colors.accent} />
      default:
        return <Icon name="info" size={30} color={colors.accent} />
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
    <View style={[styles.container, { backgroundColor: colors.white }]}>
      <View style={styles.iconBackground}>{switchIcon()}</View>
      <View style={{ flex: 8, marginLeft: 19 }}>
        <View style={styles.cardContent}>
          <Text style={styles.title}>{truncateTitle(title)}</Text>
          {wish && (
            <CircularProgress
              progress={progressValue}
              missingValue={missingValue}
            />
          )}
        </View>
        <Text style={[styles.subTitle, { fontSize: 13 }]}>
          {`criado as ${getOnlyHour(date)}`}
        </Text>
      </View>
      <View style={{ flex: 3, alignItems: 'flex-end' }}>
        {disabled ? (
          <MaterialIcons name="lock" size={24} color={colors.accent} />
        ) : (
          <Icon
            name="info"
            size={24}
            color={colors.accent}
            onPress={onPressed}
            disabled={disabled}
          />
        )}
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
  circularProgressContainer: {
    position: 'absolute',
    right: -20,
    top: -15,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    textAlign: 'left',
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
    flexShrink: 1,
  },
  subTitle: {
    fontSize: 13,
    color: colors.strongGray,
  },
  iconBackground: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    width: 50,
    height: 50,
    backgroundColor: colors.lightGray,
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  progressBar: {
    height: 5,
    backgroundColor: colors.accent,
  },
  completeText: {
    marginLeft: 10,
    fontSize: 14,
    color: colors.accent,
  },
})
