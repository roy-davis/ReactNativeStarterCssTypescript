import React from 'react'
import { Text, View } from 'react-native'
import styles from './equals.module.scss'

const Equals: React.FC = () => {
  return (
    <View>
      <Text className={styles.equals}>=</Text>
    </View>
  )
}

export default Equals
