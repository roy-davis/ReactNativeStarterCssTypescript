import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  //useColorScheme,
  View
} from 'react-native'

import styles from './App.module.scss'
import Card from './components/Card'
import Equals from './components/Equals'
import Result from './components/Result'
import Input from './components/Input'

function Divider() {
  return <View />
}

const App = () => {
  //const isDarkMode = useColorScheme() === 'dark'

  const [round, setRound] = useState<number>()
  const [residuals, setResiduals] = useState<number>(1500)
  const [cover, setCover] = useState<number>(3500)
  const [growthRate, setGrowthRate] = useState<number>(20)

  useEffect(() => {
    const available = cover - residuals
    setRound(Math.round(available / growthRate))
  }, [cover, residuals, growthRate, round])

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View className={styles.root}>
          <Card>
            <Result label="Round Length" value={round} unit="Days" />
            <Equals />
            <View className={styles.calculation}>
              <Input label="Cover" value={cover} onChange={setCover} />
              <Input
                label="Residuals"
                value={residuals}
                onChange={setResiduals}
              />
              <Divider />
              <Input
                label="Growth Rate"
                value={growthRate}
                onChange={setGrowthRate}
              />
            </View>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
