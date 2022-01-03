import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  //useColorScheme,
  View
} from 'react-native'

import styles, { blueText } from './App.module.scss'

const App = () => {
  //const isDarkMode = useColorScheme() === 'dark'

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View className={styles.root}>
          <Text className={blueText}>Example Text tet</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
