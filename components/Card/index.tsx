import React from 'react'
import { View } from 'react-native'
import styles from './card.module.scss'

const Card: React.FC = (props) => {
  return <View className={styles.card}>{props.children}</View>
}

export default Card
