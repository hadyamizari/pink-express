import FontAwesome from '@expo/vector-icons/FontAwesome'
import {ThemeProvider} from '@react-navigation/native'
import {StatusBar} from 'expo-status-bar'
import {useFonts} from 'expo-font'
import {Stack} from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import {useEffect} from 'react'
import {Sun, Moon} from 'lucide-react-native'
import 'react-native-reanimated'

import {useColorScheme} from '@/components/useColorScheme'
import {TouchableOpacity, View} from 'react-native'
import {PaperProvider} from 'react-native-paper'
import {useStore} from '@/utils/store'
import LightTheme from '@/theme/LightTheme'
import DarkTheme from '@/theme/DarkTheme'
import {rem} from '@/constants/remUtils'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from 'expo-router'

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)'
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font
  })

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error
  }, [error])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return <RootLayoutNav />
}

function RootLayoutNav() {
  const colorScheme = useColorScheme()
  const store = useStore()

  const activeTheme = store.isDark ? DarkTheme : LightTheme
  const toggleTheme = () => store.switchIsDark(!store.isDark)

  return (
    <ThemeProvider value={store.isDark ? DarkTheme : LightTheme}>
      <StatusBar style={store.isDark ? 'light' : 'dark'} />
      <PaperProvider theme={store.isDark ? DarkTheme : LightTheme}>
        <Stack>
          <Stack.Screen
            name='index'
            options={{
              title: '',
              headerShown: false,
              headerRight: () => (
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity style={{backgroundColor: activeTheme.colors.surface, padding: rem(10), paddingHorizontal: rem(15), borderRadius: 15}} onPress={toggleTheme}>
                    {activeTheme === LightTheme ? <Moon size={20} color={activeTheme.colors.primary} /> : <Sun size={20} color={activeTheme.colors.primary} />}
                  </TouchableOpacity>
                </View>
              )
            }}
          />
          <Stack.Screen name='(tabs)' options={{headerShown: false}} />
          <Stack.Screen name='modal' options={{presentation: 'modal'}} />
        </Stack>
      </PaperProvider>
    </ThemeProvider>
  )
}
