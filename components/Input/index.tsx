import React, { useState, useEffect } from 'react'
import { View, TextInput, Text } from 'react-native'
import styles from './input.module.scss'

interface InputProps {
  label: string
  value: number
  onChange: (val: number) => void
}

const Input: React.FC<InputProps> = (props) => {
  const [value, setValue] = useState<string | number>(props.value)
  const [hasFocus, setHasFocus] = useState(false)

  useEffect(() => {
    setValue(props.value)
  }, [props.value])

  const onFocus = () => {
    setHasFocus(true)
  }
  const onBlur = () => {
    setHasFocus(false)
  }

  const onChangeHandler = (newValue: string) => {
    setValue(newValue)
    props.onChange(Number(newValue))
  }

  return (
    <View className={styles.root}>
      <Text className={styles.text}>{props.label}</Text>
      <TextInput
        className={hasFocus ? styles.hasFocus : undefined}
        keyboardType="decimal-pad"
        value={value ? value.toString() : undefined}
        onChangeText={onChangeHandler}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    </View>
  )
}

export default Input
