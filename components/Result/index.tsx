import React from 'react'
import { Text, View } from 'react-native'
import styles from './result.module.scss'

interface ResultProps {
  label?: string
  value?: number
  unit?: string
}

const Result: React.FC<ResultProps> = (props) => {
  return (
    <View>
      <Text className={styles.label}>{props.label}</Text>
      <Text className={styles.value}>{props.value}</Text>
      <Text className={styles.unit}>{props.unit}</Text>
    </View>
  )
}

export default Result
