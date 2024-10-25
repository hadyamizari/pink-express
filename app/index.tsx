import {StyleSheet, View, Image, SafeAreaView, Dimensions, TextInput, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import {Button, Card, MD3Theme, Text, useTheme, HelperText} from 'react-native-paper'
import {router} from 'expo-router'
import {Eye, EyeOff, Moon, Sun} from 'lucide-react-native'
import {rem} from '@/constants/remUtils'
import {useStore} from '@/utils/store'

const Index = () => {
  const theme = useTheme()
  const styles = createStyles(theme)
  const store = useStore()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const [usernameError, setUsernameError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [formError, setFormError] = useState('')

  const toggleShowPassword = () => setShowPassword(!showPassword)
  const toggleTheme = () => store.switchIsDark(!store.isDark)

  const handleLogin = async () => {
    let hasError = false

    if (!username) {
      setUsernameError('Username field required')
      hasError = true
    } else {
      setUsernameError('')
    }

    if (!password) {
      setPasswordError('Password field is required')
      hasError = true
    } else {
      setPasswordError('')
    }

    if (hasError) {
      setFormError('Fill the required fields to login')
      return
    } else {
      setFormError('')
    }

    router.push('/(tabs)/')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={require('../assets/images/paper1.jpg')} />
      <View style={{flexDirection: 'row', position: 'absolute', top: 0, right: 0, marginTop: rem(50), margin: rem(30)}}>
        <TouchableOpacity style={{backgroundColor: theme.colors.surface, padding: rem(10), paddingHorizontal: rem(15), borderRadius: 15}} onPress={toggleTheme}>
          {store.isDark ? <Sun size={20} color={theme.colors.primary} /> : <Moon size={20} color={theme.colors.primary} />}
        </TouchableOpacity>
      </View>
      <Card mode='contained' style={styles.card}>
        <Text variant='headlineLarge' style={styles.title}>
          Login
        </Text>
        <View style={styles.cardBody}>
          <View>
            <TextInput placeholderTextColor={theme.colors.outlineVariant} value={username} onChangeText={(e) => setUsername(e)} placeholder='Username' style={styles.input} />

            {usernameError !== '' && (
              <HelperText style={styles.helperText} type='error' visible={!username.includes('@')}>
                {usernameError}
              </HelperText>
            )}
          </View>

          <View style={styles.passwordInputContainer}>
            <TextInput
              placeholderTextColor={theme.colors.outlineVariant}
              value={password}
              onChangeText={(e) => setPassword(e)}
              placeholder='Password'
              style={styles.input}
              secureTextEntry={!showPassword}
            />

            {passwordError !== '' && (
              <HelperText style={styles.helperText} type='error' visible={!password.includes('@')}>
                {passwordError}
              </HelperText>
            )}

            <TouchableOpacity style={styles.showPassword} onPress={toggleShowPassword}>
              {showPassword ? <Eye size={18} color={theme.colors.primary} /> : <EyeOff size={18} color={theme.colors.primary} />}
            </TouchableOpacity>
          </View>

          <View>
            <Button mode='contained' onPress={() => router.push('/(tabs)')}>
              Sign In
            </Button>
            {formError !== '' && (
              <HelperText style={styles.helperText} type='error'>
                {formError}
              </HelperText>
            )}
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: rem(5), justifyContent: 'center', marginTop: rem(10)}}>
          <Text variant='labelMedium'>You don't have an account?</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text variant='labelLarge' style={{color: theme.colors.primary}}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </Card>
    </SafeAreaView>
  )
}

export default Index

const createStyles = (theme: MD3Theme) =>
  StyleSheet.create({
    container: {flex: 1},
    image: {opacity: 0.6, position: 'absolute'},
    card: {borderRadius: rem(40), padding: rem(40), backgroundColor: theme.colors.surface, position: 'absolute', alignSelf: 'center', top: rem(120), width: Dimensions.get('window').width / 1.15},
    title: {fontWeight: '600', marginVertical: rem(20), color: theme.colors.primary},
    cardBody: {gap: rem(10)},
    input: {borderWidth: 0.4, borderColor: theme.colors.outline, padding: rem(10), paddingHorizontal: rem(15), borderRadius: rem(20), color: theme.colors.onSurface},
    passwordInputContainer: {justifyContent: 'center'},
    showPassword: {position: 'absolute', right: rem(20), alignSelf: 'center', margin: rem(5)},
    helperText: {marginVertical: -rem(10), marginTop: -rem(5)}
  })
